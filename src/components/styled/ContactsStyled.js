import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactsTitle = styled.h2 `
	&:nth-child(2) a#mail {
		color: rgb(230, 18, 18);
		/* text-shadow: 1px 1px 5px black; */
		letter-spacing: 1px;
	}
	color: whitesmoke;
	text-transform: ${(props) => props.var === 'title' ? 'uppercase' : 'normal'};
	font-size: ${(props) => props.var === 'title' ? '50px' : '16px'};
	padding: ${(props) => props.var === 'title' ? '0' : '5px 0 5px 10px'};
	border-left: ${(props) => props.var === 'title' ? '0' : '1px solid white'};
	display: ${(props) => props.var === 'title' ? 'block' : 'inline-block'};
	@media (max-width: 1070px) {
		font-size: ${(props) => props.var === 'title' ? '40px' : '16px'}
	}
	@media (max-width: 880px) {
		font-size: ${(props) => props.var === 'title' ? '30px' : '16px'}
}
`
export const SocialLink = styled(Link) `
transition: all .1s ease;
width: 40px;
height: 40px;
&:hover {
	transform: scale(1.1)
	}
@media (max-width: 820px) {
	width: 35px;
	height: 35px;
}
`