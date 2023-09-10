import React, { useState, useEffect, useMemo} from "react";
import { useTranslation } from "react-i18next";
import { SingleProjectContainer, SingleProject, SingleProjectSection, ProjImage, ProjText, ProjLink } from "../styled/SingleProjectStyled";
import { ProjectTitle } from "../styled/ProjectsStyled";
import projImage1  from './img/event1.jpg';
import projImage2  from './img/event2.jpg';
import projImage3  from './img/event3.jpg';

const Eventer = () => {
	const {t} = useTranslation();
	const images =  useMemo(() => [
		projImage1, projImage2, projImage3,
	], []);
	const [currentIndex, setCurrentIndex] = useState(0);
	
	useEffect(() => {
		const intervalId = setInterval(() => {
		  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
		}, [currentIndex, images]);

	return (
		<SingleProject>
			<div className="wrapper">
				<SingleProjectContainer>
					<ProjectTitle var='projects_title'>{t('projects3.subtitle')}</ProjectTitle>
				</SingleProjectContainer>
				<SingleProjectSection>
						<ProjImage src={images[currentIndex]} alt="" />
					<ProjText>
						<p>{t('eventer.p1')}</p>
						<p>{t('eventer.p2')}</p>
					</ProjText>
					<ProjLink to='https://mast3rp1ece.github.io/cursor-ed-advanced/homework10/index.html' target="_blank">{t('projects.visit')}</ProjLink>
				</SingleProjectSection>
			</div>
		</SingleProject>
	)
}

export default Eventer;