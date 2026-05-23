import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setrepo] = useState(null);

  function setProfileFunction(data) {
    setrepo(data);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then(result => {
            if (result.ok) {
              return result.json();
            }
            throw new Error("Failed to fetch profile data");
          })
          .then(response => {
            if (
              response &&
              response.data &&
              response.data.user
            ) {
              setProfileFunction(response.data.user);
            } else {
              console.error("GitHub profile data not found");
              setProfileFunction(null);
            }
          })
          .catch(function(error) {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
            );

            setProfileFunction(null);
            openSource.showGithubProfile = "false";
          });
      };

      getProfileData();
    }
  }, []);

  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    prof
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard
          prof={prof}
          key={prof?.id || "github-profile"}
        />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}