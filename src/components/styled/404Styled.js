import styled from 'styled-components';
import { Link } from 'react-router-dom';
import arrowback from '../projects/img/chleft.png';
import arrowbackWhite from '../projects/img/chleftwhite.png';

export const NotFounDiv = styled.div `
	height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	margin-top: 50px;
	align-items: center;
	gap: 20px;
	@keyframes show-project {
		0% {transform: scale(0); opacity: 0;}
		100% {transform: scale(1); opacity: 1;}
	}
`

export const BackLink = styled(Link) ` 
	color: #000;
	font-weight: bold;
	animation: show-project .8s ease 0s;
	padding: 12px 20px 12px 10px;
	box-shadow: ${(props) => (props.darkMode ? '' : 'inset 0 0 0 2px #000')};
	transition: .3s ease;
	border-radius: 30px;
	position: relative;
	background: ${(props) => (props.darkMode ? 'greenyellow' : '')};
	display: flex;
	align-items: center;
	text-align: center;
	&:before {
		content: '';
		width: 20px;
		transition: .3s ease;
		height: 20px;
		margin-right: 4px;
		background: url(${arrowback}) 100%/cover no-repeat;
		display: inline-block;
	}
	&:hover {
		background: ${(props) => (props.darkMode ? 'grey' : 'rgba(128, 128, 128, 0.4)')};
		color: #fff;
		box-shadow: none;
		&::before {
			content: '';
			background: url(${arrowbackWhite}) 100%/cover no-repeat;
		}
	}
`

export const Photo = styled.img `
	max-width: 500px;
	width: 100%;
	animation: show-project .2s ease 0s;
`
export const NotFoundTitle = styled.h2 `
	/* color: ${(props) => (props.darkMode ? '#fff' : '#000')}; */
	color: grey;
	font-size: ${(props) => props.var === 'oops' ? '30px' : '40px'};
	animation: show-project .5s ease 0s;
	text-align: center;
	font-weight: bold;
	@media (max-width: 400px) {
		font-size: ${(props) => props.var === 'oops' ? '25px' : '30px'};
	}
`