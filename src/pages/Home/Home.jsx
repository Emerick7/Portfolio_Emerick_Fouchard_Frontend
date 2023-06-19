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

function Home({ cursorVariant, setCursorVariant }) {
    return (
        <React.StrictMode>
            <div className={styles.PageContainer}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <main>
                    <section className={styles.TopSection}>
                        <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                        <IntroHomePage cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                    </section>
                    <ServicesSection cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                    <AboutMe cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                    <WorksScroll cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                    <StayConnected cursorVariant={cursorVariant} setCursorVariant={setCursorVariant}/>
                </main>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
        </React.StrictMode>
    );
}

export default Home;