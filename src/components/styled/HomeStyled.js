import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeContainer = styled.div `
	transition: 0.3s ease;
	div.title {
		animation: show-project .4s ease 0s;
	}
	p{
		letter-spacing: 3px;
	}
	/* p.home_title.surname {
		color: ${(props) => (props.darkMode ? 'greenyellow' : 'rgb(230, 18, 18)')}
	} */
	p.subtitle {
		font-size: 20px;
		@media (max-width: 400px) {
			font-size: 18px;
		}
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
	@keyframes pulse2 {
  0%, 100% {
    background-color: rgb(200,200 ,200 );
  }
  50% {
    background-color: #dee4e7;
  }
}
`
export const HOmeLink = styled(Link) `
	font-size: 18px;
	background: ${(props) => (props.darkMode ? 'greenyellow' : 'rgb(230, 18, 18)')};
	color: rgb(8, 8, 39);
	padding: 12px 25px;
	border-radius: 30px;
	font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	margin-top: 10px;
	transition: .3s ease;
	/* box-shadow: ${(props) => (props.darkMode ? 'none' : '0 0 0 2px #000 inset')}; */
	/* box-shadow: 1px 1px 10px whitesmoke; */
	&:hover {
		background: ${(props) => (props.darkMode ? 'grey' : 'rgba(0, 0, 0, 0.2)')};
		color: #fff;
	}
	animation: text-pulse 5s infinite ease 0s, show-project .8s ease 0s;
`
export const HomeTitles = styled.div `
	div p {
		display: inline;
		text-transform: uppercase;
	}
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
	@media (max-width: 400px) {
		font-size: 40px;
	}
`