import React from "react";
import { NotFounDiv, BackLink, Photo, NotFoundTitle } from "./styled/404Styled"
import notFoundPhoto from '../img/404new2.png';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


const PageNotFound = () => {
	const { t } = useTranslation();
	const darkMode = useSelector((state) => state.theme.darkMode);

	

	return (
		<div className="wrapper">
			<NotFounDiv>
				<Photo src={notFoundPhoto} alt="404 image"/>
				<NotFoundTitle var='oops'>{t('404.title1')}</NotFoundTitle>
				<NotFoundTitle darkMode={darkMode}>{t('404.title2')}</NotFoundTitle>
				<BackLink darkMode={darkMode} to='/'>{t('404.link')}</BackLink>
			</NotFounDiv>
		</div>
	)
};

export default PageNotFound;