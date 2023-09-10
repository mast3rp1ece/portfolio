import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const NavLinkHeader = styled(NavLink) `
	color: ${(props) => (props.isActive ? "greenyellow" : "#fff")};
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
		color: greenyellow;
	}
	/* &:focus {
		color: greenyellow;
	} */
`
export const LanguageButtons = styled.button `
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	font-weight: 600;
	padding: 0 5px;
	background: ${(props) => (props.isActive ? "#fff" : "transparent")};
	color: ${(props) => (props.isActive ? "rgb(8, 8, 39)" : "#fff")};
	border-radius: ${(props) => props.var === 'eng' ? '5px 0 0 5px' : '0 5px  5px 0'};
	margin-right: ${(props) => props.var === 'eng' ? '2px' : '0'};
	transition: all .2s ease;
	&:hover {
		background: #fff;
		color: rgb(8, 8, 39);
	}
`