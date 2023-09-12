import React from "react";
import { useTranslation } from "react-i18next";
import './works.css'
import wokrkImage from '../img/worksphoto2.jpg'
import { WorksIcon, WorksDescription } from "./styled/WorksStyled";
import workIcon from '../img/works.png'
import workIconDark from '../img/works-dark.png'
import upworkIcon from '../img/upwork.png'
import upworkIconDark from '../img/upwork-dark.png';
import { useSelector } from "react-redux";


const Works = () => {
	const { t } = useTranslation();
	const darkMode = useSelector((state) => state.theme.darkMode);

	const upwork = darkMode ? upworkIcon : upworkIconDark;
	const worksIcon = darkMode ? workIcon : workIconDark;
	const authorPhotoStyle = {
		boxShadow: darkMode ? '' : '2px 2px 10px #000',
	}
	const bodyWhite = {
		color: darkMode ? '' : '#000',
	}

	return (
		<div style={bodyWhite} className="works_container">
			<div className="wrapper">
				<section className="works_photo">
					<h2 className="works_title">{t('work.title')}</h2>
					<div className="works_image">
						<img style={authorPhotoStyle} src={wokrkImage} alt="Author" />
					</div>
				</section>
				<section className="works_description">
					<div className="description_container">
						<WorksIcon src={worksIcon} alt="Work icon" />
						<WorksDescription var='work-title'>WebWarp Studios</WorksDescription>
						<WorksDescription>14.08.2022 - 02.01.2023</WorksDescription>
						<WorksDescription var='work-description'>{t('work.description1')}</WorksDescription>
					</div>
					<div className="description_container">
						<WorksIcon src={worksIcon} alt="Work icon" />
						<WorksDescription var='work-title'>InfinitiTech Labs</WorksDescription>
						<WorksDescription>11.01.2023 - 23.08.2023</WorksDescription>
						<WorksDescription var='work-description' >{t('work.description2')}</WorksDescription>
					</div>
					<div className="description_container">
						<WorksIcon src={upwork} alt="Work icon" />
						<WorksDescription var='work-title'>Upwork</WorksDescription>
						<WorksDescription>{t('upwork.date')}</WorksDescription>
						<WorksDescription var='work-description' >{t('work.description3')}</WorksDescription>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Works;