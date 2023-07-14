import React from 'react';
import styles from './Resume.module.css';
import { Link, ScrollRestoration } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import RedirectionBottomPage from '../../components/RedirectionBottomPage/RedirectionBottomPage';
import Techs from '../../components/Techs/Techs';
import { FrontendTechs, BackendTechs, OtherTechs } from 'public-data/technologies';
import ResumePDF from 'public-data/CV-Emerick-FOUCHARD-2023.pdf';
import Experiences from '../../components/Experiences/Experiences';
import { APP_PATHS } from '../../utils/constants';

function Resume({ cursorVariant, setCursorVariant, toggleTheme, theme }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    //Variants pour bouton

    const divVariants = {
        initial: { width: 50 },
        onHover: {
            width: 380,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }

    // Texte H2 Techs component

    const titleH2 = {
        frontendTechs: "La liste non exaustive des technologies que j'utilise pour créer des applications côté client",
        backendTechs: "La liste non exaustive des technologies que j'utilise pour créer des applications backend rapides et évolutives",
        otherTechs: "D'autres outils... et plus encore !"
    }

    // Texte redirection bottom page

    const textParagraphs = {
        textParagraph1: "Vous voulez voir mes services web ?",
        textParagraph2: "Voir mes Services 👉",
        buttonText: "Voir mes services",
        link: APP_PATHS.SERVICES
    }

    return(
        <React.StrictMode>
            <div className={`${styles.PageContainer} page-container`}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
                <div className={styles.ContentDiv}>
                    <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                    <main>
                        <article>
                            <div className={styles.WorksTop}>
                                <h2>Technologies que j'utilise</h2>
                                <h3>Langages, frameworks, librairies et outils que j'utilise dans mon métier de Développeur Web Full-stack et Webmaster</h3>
                                <hr className={styles.Separator}/>
                            </div>
                            <Techs
                                cursorVariant={cursorVariant}
                                setCursorVariant={setCursorVariant}
                                techs={FrontendTechs}
                                titleH2={titleH2.frontendTechs} />
                            <Techs
                                cursorVariant={cursorVariant}
                                setCursorVariant={setCursorVariant}
                                techs={BackendTechs}
                                titleH2={titleH2.backendTechs} />
                            <Techs
                                cursorVariant={cursorVariant}
                                setCursorVariant={setCursorVariant}
                                techs={OtherTechs}
                                titleH2={titleH2.otherTechs} />
                        </article>
                        <Experiences />
                        <aside className={styles.AsideDownloadResume}>
                            <Link
                                to={ResumePDF}
                                target="_blank"
                                download
                                className={styles.LinkTo}
                                onMouseEnter={hoverEnter}
                                onMouseLeave={hoverLeave}>
                                <motion.div
                                    initial="initial"
                                    whileHover="onHover"
                                    >
                                    <motion.div
                                        className={styles.DivAnimOnHover}
                                        variants={divVariants}
                                    />
                                    <p>Télécharger mon CV en pdf</p>
                                </motion.div>
                            </Link>
                        </aside>
                        <RedirectionBottomPage
                            cursorVariant={cursorVariant}
                            setCursorVariant={setCursorVariant}
                            textParagraphs={textParagraphs} />
                    </main>
                </div>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
            <ScrollRestoration />
        </React.StrictMode>
    );
}

export default Resume;