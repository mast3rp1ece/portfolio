import styled from 'styled-components'
import { Link } from 'react-router-dom'
import linkImage from '../projects/img/link.png';

export const SingleProjectContainer = styled.section `
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0 50px 0;
	border-bottom: 2px solid rgba(128, 128, 128, 0.6);
`
export const SingleProject = styled.div `
	color: #fff;
	overflow-x: hidden;
	height: 100vh;
	padding: 100px 0 50px 0;
`

export const SingleProjectSection = styled.section `
	display: flex;
	align-items: center;
	gap: 30px;
	flex-direction: column;
	margin-top: 50px;
	position: relative;
	transition: all 0.3s ease;
	@keyframes show-project {
		0% {transform: scale(0); opacity: 0;}
		100% {transform: scale(1); opacity: 1;}
	}
`

export const ProjImage = styled.img `
	max-width: 1024px;
	width: 100%;
	border-radius: 10px;
	transition: all 0.3s ease;
	animation: show-project .4s ease 0s;
`
export const ProjText = styled.div `
	p {
		margin-bottom: 20px;
		text-align: center;
		font-size: 18px;
		color: whitesmoke;
		animation: show-project .6s ease 0s;
		letter-spacing: 1px;
		@media (max-width: 600px) {
			font-size: 14px;
		}
	}
`

export const ProjLink = styled(Link) `
	/* position: relative; */
	/* padding: 7px 13px; */
	color: #fff;
	margin-right: 4px;
	/* border: 2px solid rgb(230,18,18);
	border-radius: 30px;
	transition: all 0.3s ease;
	box-shadow: 2px 2px 10px black;
	animation: show-project .8s ease 0s; */
	/* &::after {
		content: url(${linkImage});
		width: 24px;
		height: 24px;
		display: inline-block;
		vertical-align: middle;
		margin-left: 5px;
	} */
	/* &:hover{
		background: grey;
		border: 2px solid grey;
	} */
`
export const LinkDiv = styled.div `
position: relative;
	padding: 7px 13px;
	color: #fff;
	display: flex;
	align-items: center;
	border: 2px solid rgb(230,18,18);
	border-radius: 30px;
	transition: all 0.3s ease;
	box-shadow: 2px 2px 10px black;
	animation: show-project .8s ease 0s;
	&:hover{
		background: grey;
		border: 2px solid grey;
	}
`