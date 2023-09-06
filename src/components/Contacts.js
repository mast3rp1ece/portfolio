import React from "react";
import { useTranslation } from "react-i18next";
import contactImage from '../img/contimg.png'
import { ContactsTitle, SocialLink } from "./styled/ContactsStyled";
import './contacts.css';
import instagramIcon from '../img/instagram.png';
import linkedinIcon from '../img/linkedin.png';
import githubIcon from '../img/github.png';

const Contacts = () => {
	const { t } = useTranslation();

	return (
		<div className="contacts_container">
			<div className="wrapper">
				<div class="contacts_main">
					<div className="main_text">
						<ContactsTitle className="main_title" var='title' dangerouslySetInnerHTML={{__html: t('cont.title')}}></ContactsTitle>
						<ContactsTitle className="main_subtitle" dangerouslySetInnerHTML={{__html: t('cont.subtitle')}}></ContactsTitle>
						<div className="main_icons">
							<SocialLink to='https://www.instagram.com/kotovych.t/' target="_blank">
								<img src={instagramIcon} alt='Instagram'/>
							</SocialLink>							
							<SocialLink to='#'>
								<img src={linkedinIcon} alt='Instagram'/>
							</SocialLink>							
							<SocialLink to='https://github.com/mast3rp1ece' target="_blank">
								<img src={githubIcon} alt='Instagram'/>
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