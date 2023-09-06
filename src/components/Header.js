import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, LanguageButtons } from "./styled/HeaderButtons";
import './header.css';

const Header = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="header_container">
			<div className="wrapper">
				<div className="header_burger">
				</div>
				<nav className="nav_container">
				<NavLink var='home' to='/home'>{t('header.home')}</NavLink>
				<div className="links">
					<div className="language_buttons">
						<LanguageButtons onClick={() => changeLanguage('en')} var='eng'>En</LanguageButtons>
						<LanguageButtons onClick={() => changeLanguage('uk')}>Укр</LanguageButtons>
					</div>
					<NavLink to='/projects'>{t('header.projects')}</NavLink>
					<NavLink to='/skills'>{t('header.skills')}</NavLink>
					<NavLink to='/works'>{t('header.works')}</NavLink>
					<NavLink to='/contacts'>{t('header.contacts')}</NavLink>
				</div>
				</nav>
			</div>
		</div>
	)
}

export default Header;