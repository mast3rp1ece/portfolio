import React from "react";
import { useTranslation } from "react-i18next";
import { HOmeLink, HomeContainer, HomeTitles } from "./styled/HomeStyled";

const Home = () => {
	const { t } = useTranslation();

	return (
		<HomeContainer>
			<div className="wrapper">
				<HomeTitles>
					<p className="home_title" dangerouslySetInnerHTML={{__html: t('home.title')}}></p>
					<p className="subtitle" dangerouslySetInnerHTML={{__html: t('home.subtitle')}}></p>
					<HOmeLink to='mailto:t.kotovych@gmail.com'>{t('home.link')}</HOmeLink>
				</HomeTitles>
			</div>
		</HomeContainer>
	)
}

export default Home;