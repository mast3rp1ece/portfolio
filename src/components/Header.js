import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { NavLinkHeader, LanguageButtons } from "./styled/HeaderButtons";
import './header.css';
import ThemeToggle from "../redux/ThemeToggle";
import { useMediaQuery } from "react-responsive";



const Header = () => {
	const { t, i18n } = useTranslation();
	const [isBurgerActive, setIsBurgerActive] = useState(false);
	const toggleBurgerMenu = () => {
		setIsBurgerActive(!isBurgerActive);
	}

	const isEnglish = i18n.language === 'en';
	const isUkrainian = i18n.language === 'uk';
	const currentLocation = useLocation();
	const burgerBtnClass = isBurgerActive ? 'burger_btn active' : 'burger_btn';
	const burgerMenuClass = isBurgerActive ? 'burger_menu active' : 'burger_menu';
	const burgerLinksClass = isBurgerActive ? 'nav_subcont active' : 'nav_subcont';
	const burgerBlur = isBurgerActive ? 'blur_back active' : 'blur_back';
	
	const isMobile = useMediaQuery({ query: "(max-width: 768px)"});

	useEffect(() => {
		const body = document.body;
		// const screenWidth = window.innerWidth;

		if (isBurgerActive && isMobile) {
			body.classList.add('lock');
		} else {
			body.classList.remove('lock');
		}
	}, [isBurgerActive, isMobile]);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="header_container">
			<div onClick={() => setIsBurgerActive(false)} className={burgerBlur}>
			</div>
			<div  className="wrapper">
				<nav className="nav_container">
					<div className={burgerBtnClass} onClick={toggleBurgerMenu}>
						<span />
					</div>
					<div className={burgerMenuClass}></div>
					<div className={burgerLinksClass}>
						<NavLinkHeader className="home_link" onClick={() => setIsBurgerActive(false)} var='home' to='/' isActive={currentLocation.pathname === '/'}>{t('header.home')}</NavLinkHeader>
						<div className="links">
							<ThemeToggle/>
							<div className="language_buttons">
								<LanguageButtons isActive={isEnglish} onClick={() => changeLanguage('en')} var='eng'>En</LanguageButtons>
								<LanguageButtons isActive={isUkrainian} onClick={() => changeLanguage('uk')}>Укр</LanguageButtons>
							</div>
							<NavLinkHeader onClick={() => setIsBurgerActive(false)} to='/projects' isActive={currentLocation.pathname === '/projects'}>{t('header.projects')}</NavLinkHeader>
							<NavLinkHeader onClick={() => setIsBurgerActive(false)} to='/skills' isActive={currentLocation.pathname === '/skills'}>{t('header.skills')}</NavLinkHeader>
							<NavLinkHeader onClick={() => setIsBurgerActive(false)} to='/works' isActive={currentLocation.pathname === '/works'}>{t('header.works')}</NavLinkHeader>
							<NavLinkHeader onClick={() => setIsBurgerActive(false)} to='/contacts' isActive={currentLocation.pathname === '/contacts'}>{t('header.contacts')}</NavLinkHeader>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header;