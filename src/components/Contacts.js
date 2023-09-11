import React from "react";
import { useTranslation } from "react-i18next";
import contactImage from '../img/contimg.png'
import { ContactsTitle, SocialLink } from "./styled/ContactsStyled";
import './contacts.css';
import instagramIcon from '../img/instagram.png';
import instagramIconDark from '../img/instagram-dark.png';
import linkedinIcon from '../img/linkedin.png';
import linkedinIconDark from '../img/linkedin-dark.png';
import githubIcon from '../img/github.png';
import githubIconDark from '../img/github-dark.png';
import { useSelector } from "react-redux";

const Contacts = () => {
	const { t } = useTranslation();
	const darkMode = useSelector((state) => state.theme.darkMode);

	const instagram = darkMode ? instagramIcon : instagramIconDark;
	const linked = darkMode ? linkedinIcon : linkedinIconDark;
	const github = darkMode ? githubIcon : githubIconDark;

	const whiteText = {
		color: darkMode ? '' : '#000',
	}
	const whiteText2 = {
		color: darkMode ? '' : '#000',
		borderLeft: darkMode ? '' : '1px solid #000'
	}
	


	return (
		<div className="contacts_container">
			<div className="wrapper">
				<div class="contacts_main">
					<div className="main_text">
						<ContactsTitle style={whiteText} className="main_title" var='title' dangerouslySetInnerHTML={{__html: t('cont.title')}}></ContactsTitle>
						<ContactsTitle style={whiteText2} className="main_subtitle" dangerouslySetInnerHTML={{__html: t('cont.subtitle')}}></ContactsTitle>
						<div className="main_icons">
							<SocialLink to='https://www.instagram.com/kotovych.t/' target="_blank">
								<img src={instagram} alt='Instagram'/>
							</SocialLink>							
							<SocialLink to='#'>
								<img src={linked} alt='Instagram'/>
							</SocialLink>							
							<SocialLink to='https://github.com/mast3rp1ece' target="_blank">
								<img src={github} alt='Instagram'/>
							</SocialLink>							
						</div>
					</div>
					<img className="contact_main_image" src={contactImage} alt="Author" />
					</div>
			</div>
		</div>
	)
}

export default Contacts;