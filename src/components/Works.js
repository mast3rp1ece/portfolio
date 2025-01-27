import React from "react";
import { useTranslation } from "react-i18next";
import "./works.css";
import wokrkImage from "../img/worksphoto2.jpg";
import {
  WorksIcon,
  WorksDescription,
  EducationIcon,
} from "./styled/WorksStyled";
import workIcon from "../img/works.png";
import workIconDark from "../img/works-dark.png";
import educationWhite from "../img/educationwhite.png";
import educationDark from "../img/educationblack.png";
// import upworkIcon from '../img/upwork.png'
// import upworkIconDark from '../img/upwork-dark.png';
import { useSelector } from "react-redux";

const Works = () => {
  const { t } = useTranslation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  // const upwork = darkMode ? upworkIcon : upworkIconDark;
  const educationIcon = darkMode ? educationWhite : educationDark;
  const worksIcon = darkMode ? workIcon : workIconDark;
  const authorPhotoStyle = {
    boxShadow: darkMode ? "" : "2px 2px 10px #000",
  };
  const bodyWhite = {
    color: darkMode ? "" : "#000",
  };
  const educationIconBg = {
    background: darkMode ? "rgb(8, 8, 39)" : "rgb(222, 228, 231)",
  };

  return (
    <div style={bodyWhite} className="works_container">
      <div className="wrapper">
        <section className="works_photo">
          <h2 className="works_title">{t("work.title")}</h2>
          <div className="works_image">
            <img style={authorPhotoStyle} src={wokrkImage} alt="Author" />
          </div>
        </section>
        <section className="works_description">
          <div className="description_container education">
            <EducationIcon
              style={educationIconBg}
              src={educationIcon}
              alt="Education Icon"
            />
            <WorksIcon src={worksIcon} alt="Work icon" />
            <WorksDescription var="work-title">
              CURSOR EDUCATION
            </WorksDescription>
            <WorksDescription var="italic">Front-End Basic</WorksDescription>
            <WorksDescription var="date">
              28.04.2023 - 02.05.2023
            </WorksDescription>
            <WorksDescription
              var="work-description"
              dangerouslySetInnerHTML={{ __html: t("work.description1") }}
            ></WorksDescription>
          </div>
          <div className="description_container education">
            <EducationIcon
              style={educationIconBg}
              src={educationIcon}
              alt="Education Icon"
            />
            <WorksIcon src={worksIcon} alt="Work icon" />
            <WorksDescription var="work-title">
              CURSOR EDUCATION
            </WorksDescription>
            <WorksDescription var="italic">Front-End Advanced</WorksDescription>
            <WorksDescription var="date">
              05.09.2023 - 10.09.2023
            </WorksDescription>
            <WorksDescription
              var="work-description"
              dangerouslySetInnerHTML={{ __html: t("work.description2") }}
            ></WorksDescription>
          </div>
          <div className="description_container">
            <WorksIcon src={worksIcon} alt="Work icon" />
            <WorksDescription var="work-title">COSTEL</WorksDescription>
            <WorksDescription var="italic">Commercial project</WorksDescription>
            <WorksDescription var="date">
              06.03.2024 - 20.07.2024
            </WorksDescription>
            <WorksDescription
              var="work-description"
              dangerouslySetInnerHTML={{ __html: t("work.description3") }}
            ></WorksDescription>
          </div>
          <div className="description_container">
            <WorksIcon src={worksIcon} alt="Work icon" />
            <WorksDescription var="work-title">RALABS</WorksDescription>
            <WorksDescription var="italic">Software Engineer</WorksDescription>
            <WorksDescription var="date">
              21.08.2024 - {t("now")}
            </WorksDescription>
            <WorksDescription
              var="work-description"
              dangerouslySetInnerHTML={{ __html: t("work.description4") }}
            ></WorksDescription>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Works;
