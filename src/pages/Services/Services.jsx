import React from 'react';
import styles from './Services.module.css';
import Header from '../../components/Header/Header';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import Footer from '../../components/Footer/Footer';
import ServicesSection from '../../components/Services/ServicesSection/ServicesSection';
import { CONTACT_PATHS } from '../../utils/constants';

function Services({ cursorVariant, setCursorVariant }) {
    // Texte services button
    const textServicesButton = {
        buttonText: "Contactez-moi pour discuter de votre projet",
        link: CONTACT_PATHS.MAIL
    }

    return(
        <React.StrictMode>
            <div className={styles.PageContainer}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <div className={styles.ContentDiv}>
                    <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                    <main>
                    <ServicesSection cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} textServicesButton={textServicesButton}/>
                    </main>
                </div>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
        </React.StrictMode>
    );
}

export default Services;