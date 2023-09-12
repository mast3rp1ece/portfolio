import React, { useState, useEffect, useMemo} from "react";
import { useTranslation } from "react-i18next";
import { SingleProjectContainer, SingleProject, SingleProjectSection, ProjImage, ProjText, ProjLink, LinkDiv } from "../styled/SingleProjectStyled";
import { ProjectTitle } from "../styled/ProjectsStyled";
import projImage1  from './img/signform1.jpg';
import projImage2  from './img/signform2.jpg';
import projImage3  from './img/signform3.jpg';
import projImage4  from './img/signform4.jpg';
import { useSelector } from "react-redux";
import linkImage from '../projects/img/link.png';
import linkImageDark from '../projects/img/link-dark.png';

const SignForm = () => {
	const {t} = useTranslation();
	const images =  useMemo(() => [
		projImage1, projImage2, projImage3, projImage4,
	], []);
	const [currentIndex, setCurrentIndex] = useState(0);

	const darkMode = useSelector((state) => state.theme.darkMode);
	const linkImages = darkMode ? linkImage : linkImageDark;
	const darkColor = {
		color: darkMode ? '' : '#000',
	}
	const shadowDiv = {
		boxShadow: darkMode ? '' : '1px 1px 5px black',
	}
	
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
					<ProjectTitle style={darkColor} var='projects_title'>{t('projects1.subtitle')}</ProjectTitle>
				</SingleProjectContainer>
				<SingleProjectSection>
						<ProjImage src={images[currentIndex]} alt="" />
					<ProjText>
						<p style={darkColor}>{t('sing.p1')}</p>
						<p style={darkColor}>{t('sing.p2')}</p>
					</ProjText>
					<LinkDiv style={shadowDiv}>
						<ProjLink style={darkColor} to='https://mast3rp1ece.github.io/react20/' target="_blank">{t('projects.visit')}</ProjLink>
						<img src={linkImages} alt="Visit icon"/>
					</LinkDiv>
				</SingleProjectSection>
			</div>
		</SingleProject>
	)
}

export default SignForm;