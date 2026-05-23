import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const imgRef = createRef();
  const {isDark} = useContext(StyleContext);

  const GetDescBullets = ({descBullets}) => {
    if (!descBullets) return null;

    return descBullets.map((item, i) => (
      <li
        key={i}
        className={isDark ? "dark-mode subTitle" : "subTitle"}
      >
        {item}
      </li>
    ));
  };

  if (!school.logo) {
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );
  }

  return (
    <div>
      <Fade bottom duration={1000} distance="20px">
        <div className="education-card">

          {/* Left Logo */}
          {school.logo && (
            <div className="education-card-left">
              <img
                crossOrigin="anonymous"
                ref={imgRef}
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          )}

          {/* Right Content */}
          <div className="education-card-right">

            {/* School Name */}
            <h3
              className={
                isDark
                  ? "dark-mode education-text-school"
                  : "education-text-school"
              }
            >
              {school.schoolName}
            </h3>

            <div className="education-text-details">

              {/* Degree */}
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {school.subHeader}
              </h5>

              {/* Duration */}
              <p
                className={
                  isDark
                    ? "dark-mode education-text-duration"
                    : "education-text-duration"
                }
              >
                {school.duration}
              </p>

              {/* Description */}
              {school.desc && (
                <p
                  className={
                    isDark
                      ? "dark-mode education-text-desc"
                      : "education-text-desc"
                  }
                >
                  {school.desc}
                </p>
              )}

              {/* Bullet Points */}
              {school.descBullets && (
                <div className="education-text-bullets">
                  <ul>
                    <GetDescBullets
                      descBullets={school.descBullets}
                    />
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>

      {/* Animated Border */}
      <Slide left duration={1500}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}