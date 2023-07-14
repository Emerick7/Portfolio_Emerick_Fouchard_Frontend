import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import IntroHomePage from '../../components/IntroHomePage/IntroHomePage';
import ServicesSection from '../../components/Services/ServicesSection/ServicesSection';
import AboutMe from '../../components/AboutMe/AboutMe';
import WorksScroll from '../../components/Works/WorksScroll';
import StayConnected from '../../components/StayConnected/StayConnected';
import { APP_PATHS } from '../../utils/constants';
import { ScrollRestoration } from 'react-router-dom';

function Home({ cursorVariant, setCursorVariant, toggleTheme, theme }) {
    // Texte services button
    const textServicesButton = {
        buttonText: "Voir mes réalisations",
        link: APP_PATHS.WORKS
    }

    return (
        <React.StrictMode>
            <div className={`${styles.PageContainer} page-container`}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
                <main>
                    <section className={styles.TopSection}>
                        <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                        <IntroHomePage cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                    </section>
                    <ServicesSection cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} textServicesButton={textServicesButton}/>
                    <AboutMe cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                    <WorksScroll cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                    <StayConnected cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                </main>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
            <ScrollRestoration />
        </React.StrictMode>
    );
}

export default Home;