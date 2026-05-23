import React from "react";
import "./OrganizationCard.scss";

export default function OrganizationCard({organization, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }

    const win = window.open(url, "_blank");

    if (win) {
      win.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(organization.url, organization.title)}>
      <div
        className={
          isDark ? "organization-container dark-mode" : "organization-container"
        }
      >
        <a
          className={
            isDark
              ? "dark-mode organization-card blog-card-shadow"
              : "organization-card"
          }
          href="#organization"
        >
          {/* Logo */}
          <div className="organization-logo-div">
            <img
              src={organization.logo}
              alt={organization.title}
              className="organization-logo"
            />
          </div>

          {/* Title */}
          <h3
            className={
              isDark ? "small-dark organization-title" : "organization-title"
            }
          >
            {organization.title}
          </h3>

          {/* Description */}
          <p className={isDark ? "small-dark small" : "small"}>
            {organization.description}
          </p>

          {/* Buttons */}
          <div className="organization-footer">
            {organization.website && (
              <span className="organization-button">Website</span>
            )}

            {organization.github && (
              <span className="organization-button secondary-button">
                GitHub
              </span>
            )}
          </div>

          {/* Arrow */}
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
