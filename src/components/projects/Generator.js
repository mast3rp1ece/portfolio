import React, { useState, useEffect, useMemo} from "react";
import { useTranslation } from "react-i18next";
import { SingleProjectContainer, SingleProject, SingleProjectSection, ProjImage, ProjText, ProjLink, LinkDiv } from "../styled/SingleProjectStyled";
import { ProjectTitle } from "../styled/ProjectsStyled";
import projImage1  from './img/gen1.jpg';
import projImage2  from './img/gen2.jpg';
import projImage3  from './img/gen3.jpg';
import projImage4  from './img/gen4.jpg';
import { useSelector } from "react-redux";
import linkImage from '../projects/img/link.png';
import linkImageDark from '../projects/img/link-dark.png';

const Generator = () => {
	const [imgLoader, setImgLoader] = useState(true);
	const {t} = useTranslation();
	const images =  useMemo(() => [
		projImage1, projImage2, projImage3, projImage4,
	], []);
	const [currentIndex, setCurrentIndex] = useState(0);
	
	useEffect(() => {
		const img = new Image();
		img.src = projImage1;
		img.onload = () => {
			setImgLoader(false);
		};
		const intervalId = setInterval(() => {
		  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
		}, [currentIndex, images]);


		const darkMode = useSelector((state) => state.theme.darkMode);
		const linkImages = darkMode ? linkImage : linkImageDark;
		const darkColor = {
			color: darkMode ? '' : '#000',
		}
		
		const shadowDiv = {
			boxShadow: darkMode ? '' : '1px 1px 5px black',
		}

	return (
		<SingleProject>
			{imgLoader ? (
			<div className="loader-container">
         	 <div className="spinner"></div>
        	</div>
		) : (
			<div className="wrapper">
				<SingleProjectContainer>
					<ProjectTitle style={darkColor} var='projects_title'>{t('projects4.subtitle')}</ProjectTitle>
				</SingleProjectContainer>
				<SingleProjectSection>
						<ProjImage src={images[currentIndex]} alt="" />
					<ProjText>
						<p style={darkColor}>{t('generator.p1')}</p>
						<p style={darkColor}>{t('generator.p2')}</p>
					</ProjText>
					<LinkDiv style={shadowDiv}>
						<ProjLink style={darkColor} to='https://mast3rp1ece.github.io/cursor-ed-advanced/homework13/index.html' target="_blank">{t('projects.visit')}</ProjLink>
						<img src={linkImages} alt="Visit icon"/>
					</LinkDiv>
				</SingleProjectSection>
			</div>
		)}
		</SingleProject>
	)
}

export default Generator;