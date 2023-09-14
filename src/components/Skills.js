import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import skillsImage from "../img/ya4.jpg";
import { SkillsDescription, SkillsIcon } from "./styled/SkillsStyled";
import './skills.css';
import javascriptIcon from '../img/javascript.png';
import javascriptIconDark from '../img/javascript-dark.png';
import htmlIcon from '../img/html.png';
import htmlIconDark from '../img/html-dark.png';
import cssIcon from '../img/css1.png';
import cssIconDark from '../img/css-black.png';
import reactIcon from '../img/react.png';
import reactIconDark from '../img/react-dark.png';
import reduxIcon from '../img/redux.png';
import reduxIconDark from '../img/redux-dark.png';
import photoshopIcon from '../img/photoshop.png';
import photoshopIconDark from '../img/photoshop-dark.png';
import figmaIcon from '../img/figma1.png';
import figmaIconDark from '../img/figma-dark.png';
import nodejsIcon from '../img/nodejs.png';
import nodejsIconDark from '../img/nodejs-dark.png';
import { useSelector } from "react-redux";

const Skills = () => {
	const { t } = useTranslation();
	const darkMode = useSelector((state) => state.theme.darkMode);
	const [imgLoader, setImgLoader] = useState(true);
	useEffect(() => {
		if (skillsImage) {
			setImgLoader(false);
		};
	}, []);

	const cssIcons = darkMode ? cssIcon : cssIconDark;
	const htmlIcons = darkMode ? htmlIcon : htmlIconDark;
	const javascriptIcons = darkMode ? javascriptIcon : javascriptIconDark;
	const reactIcons = darkMode ? reactIcon : reactIconDark;
	const reduxIcons = darkMode ? reduxIcon : reduxIconDark;
	const photoshopIcons = darkMode ? photoshopIcon : photoshopIconDark;
	const nodejsIcons = darkMode ? nodejsIcon : nodejsIconDark;
	const figmaIcons = darkMode ? figmaIcon : figmaIconDark;

	const whiteText = {
		color: darkMode ? '' : '#000',
	}
	const subtitleColor = {
		color: darkMode ? '' : 'rgb(50, 50, 50)',
	}

	return (
		<div className="skills_container">
			{imgLoader ? ( 
			<div className="loader-container">
          <div className="spinner"></div>
        </div>) : (
			<div className="wrapper">
				<section className="skills_about">
					<div className="about_img">
						<img src={skillsImage} alt="Author" />
					</div>
					<div className="about_text">
						<p style={whiteText} className="about_hello">{t('about.hello')}</p>
						<h2 style={whiteText} className="about_title" dangerouslySetInnerHTML={{__html: t('about.title')}}></h2>
						<p style={subtitleColor} className="about_subtitle">{t('about.subtitle')}</p>
					</div>
				</section>
				<p style={whiteText} className="skills">{t('about.skills')}</p>
				<section className="skills_my-skills">
					<div className="my-skills_container">
						<SkillsIcon src={htmlIcons} alt="HTML" />
						<SkillsDescription style={whiteText}>HTML</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon var='css' src={cssIcons} alt="CSS" />
						<SkillsDescription style={whiteText}>CSS</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={javascriptIcons} alt="JavaScript" />
						<SkillsDescription style={whiteText}>JavaScript</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={reactIcons} alt="React" />
						<SkillsDescription style={whiteText}>React</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={reduxIcons} alt="Redux" />
						<SkillsDescription style={whiteText}>Redux</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={nodejsIcons} alt="Node.js" />
						<SkillsDescription style={whiteText}>Node.js</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={photoshopIcons} alt="Photoshop" />
						<SkillsDescription style={whiteText}>Photoshop</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={figmaIcons} alt="Figma" />
						<SkillsDescription style={whiteText}>Figma</SkillsDescription>
					</div>
				</section>
			</div>)}
		</div>
	)
}

export default Skills;