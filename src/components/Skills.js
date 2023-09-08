import React from "react";
import { useTranslation } from "react-i18next";
import skillsImage from "../img/ya4.jpg";
import { SkillsDescription, SkillsIcon } from "./styled/SkillsStyled";
import './skills.css';
import javascriptIcon from '../img/javascript.png';
import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import reactIcon from '../img/react.png';
import reduxIcon from '../img/redux.png';
import photoshopIcon from '../img/photoshop.png';
import figmaIcon from '../img/figma.png';
import nodejsIcon from '../img/nodejs.png';

const Skills = () => {
	const { t } = useTranslation();
	
	return (
		<div className="skills_container">
			<div className="wrapper">
				<section className="skills_about">
					<div className="about_img">
						<img src={skillsImage} alt="Author" />
					</div>
					<div className="about_text">
						<p className="about_hello">{t('about.hello')}</p>
						<h2 className="about_title" dangerouslySetInnerHTML={{__html: t('about.title')}}></h2>
						<p className="about_subtitle">{t('about.subtitle')}</p>
					</div>
				</section>
				<p className="skills">{t('about.skills')}</p>
				<section className="skills_my-skills">
					<div className="my-skills_container">
						<SkillsIcon src={htmlIcon} alt="HTML" />
						<SkillsDescription>HTML</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={cssIcon} alt="CSS" />
						<SkillsDescription>CSS</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={javascriptIcon} alt="JavaScript" />
						<SkillsDescription>JavaScript</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={reactIcon} alt="React" />
						<SkillsDescription>React</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={reduxIcon} alt="Redux" />
						<SkillsDescription>Redux</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={nodejsIcon} alt="Node.js" />
						<SkillsDescription>Node.js</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={photoshopIcon} alt="Photoshop" />
						<SkillsDescription>Photoshop</SkillsDescription>
					</div>
					<div className="my-skills_container">
						<SkillsIcon src={figmaIcon} alt="Figma" />
						<SkillsDescription>Figma</SkillsDescription>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Skills;