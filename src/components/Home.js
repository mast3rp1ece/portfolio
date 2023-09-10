import React from "react";
import { HOmeLink, HomeContainer, HomeTitles } from "./styled/HomeStyled";

const Home = () => {

	return (
		<HomeContainer>
			<div className="wrapper">
				<HomeTitles>
					<p className="home_title">Taras <span>Kotovych</span></p>
					<p className="subtitle"><span>Front-End</span> Developer</p>
					<HOmeLink to='mailto:t.kotovych@gmail.com'>Get in Touch</HOmeLink>
				</HomeTitles>
			</div>
		</HomeContainer>
	)
}

export default Home;