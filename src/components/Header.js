import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, LanguageButtons } from "./styled/HeaderButtons";
import './header.css';

const Header = () => {
	const { t, i18n } = useTranslation();
	const [isBurgerActive, setIsBurgerActive] = useState(false);
	const toggleBurgerMenu = () => {
		setIsBurgerActive(!isBurgerActive);

		// const body = document.body;
		// if (isBurgerActive) {
		// 	body.classList.remove('lock');
		// } else {
		// 	body.classList.add('lock');
		// }
	}
	const burgerBtnClass = isBurgerActive ? 'burger_btn active' : 'burger_btn';
	const burgerMenuClass = isBurgerActive ? 'burger_menu active' : 'burger_menu';
	const burgerLinksClass = isBurgerActive ? 'nav_subcont active' : 'nav_subcont';
	const burgerBlur = isBurgerActive ? 'blur_back active' : 'blur_back';

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="header_container">
			<div className={burgerBlur}>
			</div>
			<div className="wrapper">
				<nav className="nav_container">
					<div className={burgerBtnClass} onClick={toggleBurgerMenu}>
						<span />
					</div>
					<div className={burgerMenuClass}></div>
					<div className={burgerLinksClass}>
						<NavLink className="home_link" onClick={() => setIsBurgerActive(false)} var='home' to='/'>{t('header.home')}</NavLink>
						<div className="links">
							<div className="language_buttons">
								<LanguageButtons onClick={() => changeLanguage('en')} var='eng'>En</LanguageButtons>
								<LanguageButtons onClick={() => changeLanguage('uk')}>Укр</LanguageButtons>
							</div>
							<NavLink onClick={() => setIsBurgerActive(false)} to='/projects'>{t('header.projects')}</NavLink>
							<NavLink onClick={() => setIsBurgerActive(false)} to='/skills'>{t('header.skills')}</NavLink>
							<NavLink onClick={() => setIsBurgerActive(false)} to='/works'>{t('header.works')}</NavLink>
							<NavLink onClick={() => setIsBurgerActive(false)} to='/contacts'>{t('header.contacts')}</NavLink>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Header;