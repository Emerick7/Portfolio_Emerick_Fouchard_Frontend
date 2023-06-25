import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WorksPortfolio from '../../components/WorksPortfolio/WorksPortfolio';
import styles from './Works.module.css';

function Works({ cursorVariant, setCursorVariant }) {
    return(
        <React.StrictMode>
            <div className={styles.PageContainer}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <WorksPortfolio cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
        </React.StrictMode>
    );
}

export default Works;