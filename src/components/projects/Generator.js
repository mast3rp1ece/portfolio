import React, { useState, useEffect, useMemo} from "react";
import { useTranslation } from "react-i18next";
import { SingleProjectContainer, SingleProject, SingleProjectSection, ProjImage, ProjText, ProjLink } from "../styled/SingleProjectStyled";
import { ProjectTitle } from "../styled/ProjectsStyled";
import projImage1  from './img/gen1.jpg';
import projImage2  from './img/gen2.jpg';
import projImage3  from './img/gen3.jpg';
import projImage4  from './img/gen4.jpg';

const Generator = () => {
	const {t} = useTranslation();
	const images =  useMemo(() => [
		projImage1, projImage2, projImage3, projImage4,
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
					<ProjectTitle var='projects_title'>{t('projects4.subtitle')}</ProjectTitle>
				</SingleProjectContainer>
				<SingleProjectSection>
						<ProjImage src={images[currentIndex]} alt="" />
					<ProjText>
						<p>{t('generator.p1')}</p>
						<p>{t('generator.p2')}</p>
					</ProjText>
					<ProjLink to='https://mast3rp1ece.github.io/cursor-ed-advanced/homework13/index.html' target="_blank">{t('projects.visit')}</ProjLink>
				</SingleProjectSection>
			</div>
		</SingleProject>
	)
}

export default Generator;