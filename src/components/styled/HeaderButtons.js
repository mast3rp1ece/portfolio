import { Link } from "react-router-dom";
import styled from 'styled-components';

export const NavLink = styled(Link) `
	color: ${(props) => props.var === 'home' ? 'whitesmoke' : "#fff"};
	font-size: 16px;
	transition: all .2s ease;
	&::before {
		content: ${(props) => props.var === 'home' ? '' : "none"};
		width: 10px;
		height: 2px;
		display: inline-block;
		position: absolute;
		color: #fff;
	}
	&:hover {
		color: gray;
	}
	&:focus {
		color: greenyellow;
	}
`
export const LanguageButtons = styled.button `
	color: whitesmoke;
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	font-weight: 600;
	padding: 0 5px;
	color: rgb(8, 8, 39);
	background: whitesmoke;
	border-radius: ${(props) => props.var === 'eng' ? '5px 0 0 5px' : '0 5px  5px 0'};
	margin-right: ${(props) => props.var === 'eng' ? '2px' : '0'};
	transition: all .2s ease;
	&:hover {
		background: rgb(8, 8, 39);
		color: whitesmoke;
		outline: 1px solid whitesmoke;
	}
`