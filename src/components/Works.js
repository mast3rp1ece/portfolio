import React from "react";
import { useTranslation } from "react-i18next";
import './works.css'
import wokrkImage from '../img/worksphoto2.jpg'
import { WorksIcon, WorksDescription } from "./styled/WorksStyled";
import workIcon from '../img/works.png'

const Works = () => {
	const { t } = useTranslation();

	return (
		<div className="works_container">
			<div className="wrapper">
				<section className="works_photo">
					<h2 className="works_title">{t('work.title')}</h2>
					<div className="works_image">
						<img src={wokrkImage} alt="Author" />
					</div>
				</section>
				<section className="works_description">
					<div className="description_container">
						<WorksIcon src={workIcon} alt="Work icon" />
						<WorksDescription var='work-title'>IT Global</WorksDescription>
						<WorksDescription>14.08.2022 - 02.01.2023</WorksDescription>
						<WorksDescription var='work-description'>{t('work.description1')}</WorksDescription>
					</div>
					<div className="description_container">
						<WorksIcon src={workIcon} alt="Work icon" />
						<WorksDescription var='work-title'>InfinitiTech Labs</WorksDescription>
						<WorksDescription>11.01.2023 - 23.08.2023</WorksDescription>
						<WorksDescription var='work-description' >{t('work.description2')}</WorksDescription>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Works;