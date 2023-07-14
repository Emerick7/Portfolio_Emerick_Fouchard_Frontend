import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WorksPortfolio from '../../components/WorksPortfolio/WorksPortfolio';
import styles from './Works.module.css';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import { ScrollRestoration } from 'react-router-dom';

function Works({ cursorVariant, setCursorVariant, toggleTheme, theme }) {
    return(
        <React.StrictMode>
            <div className={`${styles.PageContainer} page-container`}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
                <div className={styles.ContentDiv}>
                    <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                    <WorksPortfolio cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                </div>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
            <ScrollRestoration />
        </React.StrictMode>
    );
}

export default Works;