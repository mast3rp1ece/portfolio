import React, { useState, useEffect, useMemo} from "react";
import { useTranslation } from "react-i18next";
import { SingleProjectContainer, SingleProject, SingleProjectSection, ProjImage, ProjText, ProjLink } from "../styled/SingleProjectStyled";
import { ProjectTitle } from "../styled/ProjectsStyled";
import projImage1  from './img/gen1.jpg';
import projImage2  from './img/gen2.jpg';
import projImage3  from './img/gen3.jpg';
import projImage4  from './img/gen4.jpg';

const Generator = () => {
	const {t} = useTranslation();
	const images =  useMemo(() => [
		projImage1, projImage2, projImage3, projImage4,
	], []);
	const [currentIndex, setCurrentIndex] = useState(0);
	
	useEffect(() => {
		const intervalId = setInterval(() => {
		  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 3000);

		return () => clearInterval(intervalId);
		}, [currentIndex, images]);

	return (
		<SingleProject>
			<div className="wrapper">
				<SingleProjectContainer>
					<ProjectTitle var='projects_title'>{t('projects1.subtitle')}</ProjectTitle>
				</SingleProjectContainer>
				<SingleProjectSection>
						<ProjImage src={images[currentIndex]} alt="" />
					<ProjText>
						<p>У цьому проекті показаний приклад реалізації форми реєстрації/входу. Форма перевіряє правильність введенних данних, запам'ятовує зареєстрованого користувача та в разі невідповідності повідомляє користувача.</p>
						<p>Форма реалізована через React, за допомогою styled-components.</p>
					</ProjText>
					<ProjLink to='https://mast3rp1ece.github.io/react20/' target="_blank">{t('projects.visit')}</ProjLink>
				</SingleProjectSection>
			</div>
		</SingleProject>
	)
}

export default Generator;