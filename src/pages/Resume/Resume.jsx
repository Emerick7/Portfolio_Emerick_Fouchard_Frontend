import React from 'react';
import styles from './Resume.module.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import RedirectionBottomPage from '../../components/RedirectionBottomPage/RedirectionBottomPage';
import Techs from '../../components/Techs/Techs';
import { FrontendTechs, BackendTechs, OtherTechs } from 'public-data/technologies';

function Resume({ cursorVariant, setCursorVariant }) {
    // Texte H2 Techs component

    const titleH2 = {
        frontendTechs: "La liste non exaustive des technologies que j'utilise pour créer des applications côté client",
        backendTechs: "La liste non exaustive des technologies que j'utilise pour créer des applications backend rapides et évolutives",
        otherTechs: "D'autres... et plus encore !"
    }

    // Texte redirection bottom page

    const textParagraphs = {
        textParagraph1: "Vous voulez voir mes services web ?",
        textParagraph2: "Voir mes Services 👉",
        buttonText: "Voir mes services"
    }

    return(
        <React.StrictMode>
            <div className={styles.PageContainer}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <main>
                    <div className={styles.ContentDiv}>
                        <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                        <article>
                            <div className={styles.WorksTop}>
                                <h2>Technologies que j'utilise</h2>
                                <h3>Les langages, frameworks, librairies et outils que j'utilise pour mon travail</h3>
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
                    </div>
                    <RedirectionBottomPage
                            cursorVariant={cursorVariant}
                            setCursorVariant={setCursorVariant}
                            textParagraphs={textParagraphs} />
                </main>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
        </React.StrictMode>
    );
}

export default Resume;