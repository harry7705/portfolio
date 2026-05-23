import React from "react";
import "./Organization.scss";
import { Fade } from "react-reveal";
import { organizationSection } from "../../portfolio";

export default function Organization() {
  if (!organizationSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="organizations">
        <div className="organization-header">
          <h1 className="organization-header-title">
            {organizationSection.title}
          </h1>

          <p className="subTitle organization-subtitle">
            {organizationSection.subtitle}
          </p>
        </div>

        <div className="organization-cards-div">
          {organizationSection.organizations.map((org, i) => {
            return (
              <div key={i} className="organization-card-shadow">
                <div className="organization-container">
                  <a
                    className="organization-card"
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    {/* DP / Logo */}
                    <div className="organization-logo-div">
                      <img
                        src={org.logo}
                        alt={org.name}
                        className="organization-logo"
                        onError={(e) => console.log("Image failed:", e.target.src)}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="organization-title">
                      {org.name}
                    </h3>

                    {/* Description */}
                    <p className="small">
                      {org.description}
                    </p>

                    {/* Arrow */}
                    <div className="go-corner">
                      <div className="go-arrow">
                        →
                      </div>
                    </div>

                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}