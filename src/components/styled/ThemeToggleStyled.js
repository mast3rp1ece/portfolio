import styled from "styled-components";


export const Label = styled.label `
	background: #fff;
	width: 40px;
	/* transition: .3s ease; */
	height: 20px;
	border-radius: 20px;
	.sun {
		opacity: 0;
	}
	svg {
		path {
			transition: .3s ease;
		}
		&:nth-child(2) {
			left: 3px;
			top: 3px;
		}
		&:nth-child(1) {
			left: 37px;
			transform: translateX(-100%);
			top: 3px;
		}
		width: 14px;
		height: 14px;
		position: absolute;
		z-index: 9;
	}
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
	@media (max-width: 768px) {
		order: 3;
	}
`
export const Toggle = styled.input `
	width: 0;
	height: 0;
	visibility: hidden;
	&:checked + ${Label}{
		background: grey;
		.moon {
			opacity: 0;
		}
		.sun {
			opacity: 1;
		}
		&::after {
			left: 38px;
			transform: translateX(-100%);
			background: linear-gradient(180deg, #777, #3a3a3a);
		}
	}
	/* @media (max-width: 768px) {
		order: 3;
	} */
`