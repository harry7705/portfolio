const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

if (USE_GITHUB_DATA === "true") {
  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") {
    name
    bio
    avatarUrl
    location

    pinnedItems(first: 6, types: [REPOSITORY]) {
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            url

            stargazers {
              totalCount
            }

            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
  }
}
`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node"
    }
  };

  const req = https.request(options, res => {
    let body = "";

    console.log(`GitHub Status: ${res.statusCode}`);

    res.on("data", chunk => {
      body += chunk;
    });

    res.on("end", () => {
      fs.writeFileSync("./public/profile.json", body);
      console.log("Saved profile.json");
    });
  });

  req.on("error", err => {
    console.log(err);
  });

  req.write(data);
  req.end();
}