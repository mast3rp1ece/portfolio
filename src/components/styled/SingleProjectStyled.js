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
	padding: 100px 0 50px 0;
`

export const SingleProjectSection = styled.section `
	display: flex;
	align-items: center;
	gap: 30px;
	flex-direction: column;
	margin-top: 50px;
`

export const ProjImage = styled.img `
	max-width: 1024px;
	width: 100%;
	border-radius: 10px;
	transition: all 0.3s ease;
`
export const ProjText = styled.div `
	p {
		margin-bottom: 20px;
		text-align: center;
		font-size: 18px;
		color: whitesmoke;
		letter-spacing: 1px;
		@media (max-width: 600px) {
			font-size: 14px;
		}
	}
`

export const ProjLink = styled(Link) `
	position: relative;
	padding: 7px 13px;
	color: #fff;
	border: 2px solid rgb(230,18,18);
	border-radius: 30px;
	transition: all 0.3s ease;
	box-shadow: 2px 2px 10px black;
	&::after {
		content: url(${linkImage});
		width: 24px;
		height: 24px;
		display: inline-block;
		vertical-align: middle;
		margin-left: 5px;
	}
	&:hover{
		background: grey;
		border: 2px solid grey;
	}
`