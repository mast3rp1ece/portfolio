import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ProjectsContsiner = styled.div `
	color:#fff;
	padding: 100px 0 20px 0;
	overflow-x: hidden;
`

export const SectionTitle = styled.section `
	
`
export const ProjectsSection = styled.section `

`

export const SingleProjectContainer = styled.section `
	border-radius: 10px;
	/* border: 1px solid grey; */
	/* box-shadow: 10px 10px 50px whitesmoke; */
	padding: 15px;
	margin-bottom: 40px;
	background: rgba(80, 80, 80, 0.5);
	display: flex;
	gap: 20px;
	position: relative;
	&:nth-child(1) {
		animation: projects-show .4s ease 0s ;
	}
	&:nth-child(2) {
		animation: projects-show .6s ease 0s ;
	}
	&:nth-child(3) {
		animation: projects-show .8s ease 0s ;
	}
	&:nth-child(4) {
		animation: projects-show 1s ease 0s ;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
	@keyframes projects-show {
		0% {left: -100%;}
		100% {left: 0;}
	}
`
export const ProjectTitle = styled.h2 `
	font-weight: ${(props) => props.var === 'projects_description' ? 'normal' : 'bold'};
	font-size: ${(props) => props.var === 'projects_title' ? '40px' : props.var === 'projects_subtitle' ? '24px':  '18px'};
	border-bottom: ${(props) => props.var === 'projects_title' ? '3px solid rgb(230, 18, 18)' : 'none'};
	padding: ${(props) => props.var === 'projects_title' ? '15px 0' : '0'};
	font-style: ${(props) => props.var === 'projects_description' ? 'italic' : 'normal'};
	position: relative;
	@media (max-width: 600px) {
		font-size: ${(props) => props.var === 'projects_subtitle' ? '20px' : props.var === 'projects_description' ? '16px' : props.var === 'projects_title' ? '35px' : 'none'}
	}
	animation: ${(props) => props.var === 'projects_title' ? 'text-show 0.3s linear 0s normal none' : 'none'}
`

export const ProjectIcon = styled.img `
	animation: skew-x-shakeng 1s linear 1s normal none;	
	@media (max-width: 768px) {
		width: 80px;
		height: 80px;
	}
`
export const SubtitlesLink = styled(Link) `
	color: ${(props) => props.var === 'visit' ? 'greenyellow' : props.var === 'more' ? 'darkgrey' : '#fff'};
	transition: all .2s ease;
	margin-top: 20px;
	&:hover {
		/* color: grey; */
		text-decoration: underline;
	}
`