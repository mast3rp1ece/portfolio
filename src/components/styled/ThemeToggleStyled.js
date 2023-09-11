import styled from "styled-components";


export const Label = styled.label `
	background: #fff;
	width: 40px;
	transition: .3s ease;
	height: 20px;
	border-radius: 20px;
	&:active {
		&::after {
			width: 25px;
		}
	}
	position: relative;
	box-shadow: inset 0px 1px 2px rgba(0,0,0,0.4), inset 0px -1px 2px rgba(255,255,255,0.4);
	&:after {
		content: '';
		transition: .3s ease;
		width: 16px;
		height: 16px;
		background: linear-gradient(180deg, #ffcc89, #d8860b);
		display: block;
		border-radius: 18px;
		position: absolute;
		top: 2px;
		left: 2px;
		box-shadow: 0 2px 5px rgba(0,0,0,0.4);
	}
`
export const Toggle = styled.input `
	width: 0;
	height: 0;
	visibility: hidden;
	&:checked + ${Label}{
		background: grey;
		&::after {
			left: 38px;
			transform: translateX(-100%);
			background: linear-gradient(180deg, #777, #3a3a3a);
		}
	}
`