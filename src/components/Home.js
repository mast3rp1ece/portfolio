import React from "react";
import { useTranslation } from "react-i18next";
import { HOmeLink, HomeContainer, HomeTitles } from "./styled/HomeStyled";
import { useSelector } from "react-redux";

const Home = () => {
	const { t } = useTranslation();

	const darkMode = useSelector((state) => state.theme.darkMode);
	const bodyStyle = {
		background: darkMode ? '' : '#dee4e7',
		animation: darkMode ? '' : 'pulse2 5s infinite',
  	}
	const darkText = {
		color: darkMode ? '' : '#000',
	 }
	 const surName = {
		color: darkMode ? 'greenyellow' : 'rgb(230, 18, 18)',
	 }
	
	
	return (
		<HomeContainer style={bodyStyle}>
			<div className="wrapper">
				<HomeTitles>
					<div className="title">
						<p style={darkText} className="home_title">{t('home.title')}</p>
						<p style={surName} className="home_title surname">{t('home.title1')}</p>
					</div>
					<p style={darkText} className="subtitle" dangerouslySetInnerHTML={{__html: t('home.subtitle')}}></p>
					<HOmeLink darkMode={darkMode} to='mailto:t.kotovych@gmail.com'>{t('home.link')}</HOmeLink>
				</HomeTitles>
			</div>
		</HomeContainer>
	)
}

export default Home;