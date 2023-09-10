import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div `
	p{
		letter-spacing: 3px;
	}
	p.home_title {
		text-transform: uppercase;
		letter-spacing: 1px;
		span {
			color: greenyellow;
		}
		animation: show-project .4s ease 0s;
	}
	p.subtitle {
		font-size: 20px;
		span {
			color: grey;
		}
		animation: show-project .6s ease 0s;
	}
	animation: pulse 5s infinite;
	@keyframes pulse {
  0%, 100% {
    background-color: rgb(8, 8, 39);
  }
  50% {
    background-color: rgb(8, 8, 5);
  }
}
`
export const HOmeLink = styled(Link) `
	font-size: 18px;
	background: greenyellow;
	color: rgb(8, 8, 39);
	padding: 12px 25px;
	border-radius: 30px;
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	margin-top: 10px;
	transition: .3s ease;
	/* box-shadow: 1px 1px 10px whitesmoke; */
	&:hover {
		background: grey;
	}
	animation: show-project 1s ease 0s;
`
export const HomeTitles = styled.div `
	font-size: 50px;
	color: white;
	display: flex;
	justify-content: center;
	gap: 20px;
	font-weight: bold;
	align-items: center;
	text-align: center;
	flex-direction: column;
	height: 100vh;
	@keyframes show-project {
		0% {transform: scale(0); opacity: 0;}
		100% {transform: scale(1); opacity: 1;}
	}
`