import React from "react";
import { useTranslation } from "react-i18next";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { ProjectsContsiner, SectionTitle, ProjectsSection, SingleProjectContainer, ProjectTitle, ProjectIcon, SubtitlesLink } from "./styled/ProjectsStyled";
import './projects.css';
import projectIcon from '../img/project.png'
import projectIconDark from '../img/project-dark.png'
import formSlider1 from '../img/form1.png';
import formSlider2 from '../img/form2.png';
import post1 from '../img/post1.png'
import post2 from '../img/post2.png'
import events1 from '../img/events1.png'
import events2 from '../img/events2.png'
import gen1 from '../img/generator1.png'
import gen2 from '../img/generator2.png'
import { useSelector } from "react-redux";

const Projects = () => {

	const {t} = useTranslation();
	const darkMode = useSelector((state) => state.theme.darkMode);

	const projectIcons = darkMode ? projectIcon : projectIconDark;

	const blackColor = {
		color: darkMode ? '' : '#000',
	}
	const greyColor = {
		color: darkMode ? '' : 'rgb(50, 50, 50)',
	}
	const backSection = {
		background: darkMode ? '' : 'rgba(128, 128, 128, 0.3)',
	}
	const visitColor = {
		color: darkMode ? '' : 'red',
		// fontWeight: darkMode ? '' : 'bold',
	}

	const signLink = 'https://mast3rp1ece.github.io/react20/';
	const postLink = 'https://mast3rp1ece.github.io/react21/';
	const generatorLink = 'https://mast3rp1ece.github.io/cursor-ed-advanced/homework13/index.html';
	const eventLink = 'https://mast3rp1ece.github.io/cursor-ed-advanced/homework10/index.html';

	return (
		<ProjectsContsiner>
			<div className="wrapper">
				<SectionTitle>
					<div className="project_title">
						<ProjectTitle style={blackColor} var='projects_title'>{t('projects.title')}</ProjectTitle>
						<ProjectIcon src={projectIcons} alt="Projects icon"/>
					</div>
				</SectionTitle>
				<ProjectsSection>
					<SingleProjectContainer style={backSection}>
						<ReactCompareSlider className="project_slider"
						position={40}
						handle={<ReactCompareSliderHandle buttonStyle={{width: 50, height: 50, margin: 5,}} />}
						itemOne={<ReactCompareSliderImage src={formSlider1} alt="Image one" />}
						itemTwo={<ReactCompareSliderImage src={formSlider2} alt="Image two" />}
						/>
						<div className="project_subtitles_container">
							<div className="subtitles_text">
								<ProjectTitle style={blackColor} var='projects_subtitle'>{t('projects1.subtitle')}</ProjectTitle>
								<ProjectTitle style={greyColor} var='projects_description'>{t('projects1.description')}</ProjectTitle>
							</div>
							<div className="subtitles_links">
								<SubtitlesLink style={greyColor} to='signform' var='more'>{t('projects.more')}</SubtitlesLink>
								<SubtitlesLink style={visitColor} to={signLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
							</div>
						</div>
					</SingleProjectContainer>
					<SingleProjectContainer style={backSection}>
						<ReactCompareSlider className="project_slider"
						position={65}
							handle={<ReactCompareSliderHandle buttonStyle={{width: 50, height: 50, margin: 5,}} />}
							itemOne={<ReactCompareSliderImage src={post1} alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src={post2} alt="Image two" />}
							/>
							<div className="project_subtitles_container">
								<div className="subtitles_text">
									<ProjectTitle style={blackColor} var='projects_subtitle'>{t('projects2.subtitle')}</ProjectTitle>
									<ProjectTitle style={greyColor} var='projects_description'>{t('projects2.description')}</ProjectTitle>
								</div>
								<div className="subtitles_links">
									<SubtitlesLink style={greyColor} to='publication' var='more'>{t('projects.more')}</SubtitlesLink>
									<SubtitlesLink style={visitColor} to={postLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
								</div>
							</div>
					</SingleProjectContainer>
					<SingleProjectContainer style={backSection}>
						<ReactCompareSlider className="project_slider"
							handle={<ReactCompareSliderHandle buttonStyle={{width: 50, height: 50, margin: 5,}} />}
							itemOne={<ReactCompareSliderImage src={events1} alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src={events2} alt="Image two" />}
							/>
							<div className="project_subtitles_container">
								<div className="subtitles_text">
									<ProjectTitle style={blackColor} var='projects_subtitle'>{t('projects3.subtitle')}</ProjectTitle>
									<ProjectTitle style={greyColor} var='projects_description'>{t('projects3.description')}</ProjectTitle>
								</div>
								<div className="subtitles_links">
									<SubtitlesLink style={greyColor} to='eventer' var='more'>{t('projects.more')}</SubtitlesLink>
									<SubtitlesLink style={visitColor} to={eventLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
								</div>
							</div>
					</SingleProjectContainer>
					<SingleProjectContainer style={backSection}>
						<ReactCompareSlider className="project_slider"
						position={35}
							handle={<ReactCompareSliderHandle buttonStyle={{width: 50, height: 50, margin: 5,}} />}
							itemOne={<ReactCompareSliderImage src={gen1} alt="Image one" />}
							itemTwo={<ReactCompareSliderImage src={gen2} alt="Image two" />}
							/>
							<div className="project_subtitles_container">
								<div className="subtitles_text">
									<ProjectTitle style={blackColor} var='projects_subtitle'>{t('projects4.subtitle')}</ProjectTitle>
									<ProjectTitle style={greyColor} var='projects_description'>{t('projects4.description')}</ProjectTitle>
								</div>
								<div className="subtitles_links">
									<SubtitlesLink style={greyColor} to='generator' var='more'>{t('projects.more')}</SubtitlesLink>
									<SubtitlesLink style={visitColor} to={generatorLink} target="_blank" var='visit'>{t('projects.visit')}</SubtitlesLink>
								</div>
							</div>
					</SingleProjectContainer>
				</ProjectsSection>
			</div>
		</ProjectsContsiner>
	)
}

export default Projects;