import React from 'react';
import styles from './Service.module.css';
import Header from '../../components/Header/Header';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import Footer from '../../components/Footer/Footer';
import { ScrollRestoration, useParams, useNavigate } from 'react-router-dom';
import { ServicesContent } from 'public-data/services-page-content';
import ServicePageContent from '../../components/ServicePageContent/ServicePageContent';
import { APP_PATHS } from '../../utils/constants';
import RedirectionBottomPage from '../../components/RedirectionBottomPage/RedirectionBottomPage';

function Service({ cursorVariant, setCursorVariant, toggleTheme, theme }) {
    // Texte redirection bottom page

    const textParagraphs = {
        textParagraph1: "Vous voulez mieux connaître mes compétences ?",
        textParagraph2: "Voir mon CV 👉",
        buttonText: "Voir mon CV",
        link: APP_PATHS.RESUME
    }

    let { serviceId } = useParams();

    const naviguate = useNavigate();

    if(ServicesContent.length > 0){
        let serviceSelected = ServicesContent.find(element => element.id === serviceId)

        if(!serviceSelected){
            naviguate('/error');
            return null;
        } else {
            return(
                <React.StrictMode>
                    <div className={`${styles.PageContainer} page-container`}>
                        <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
                        <div className={styles.ContentDiv}>
                            <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                            <main className={styles.Main}>
                                <ServicePageContent service={serviceSelected} cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
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
    } else {
        return(
            <p>loading...</p>
        )
    }
}

export default Service;