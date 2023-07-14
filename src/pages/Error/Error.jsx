import React from 'react';
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';
import styles from './Error.module.css';
import { ScrollRestoration } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { APP_PATHS } from '../../utils/constants';
import Footer from '../../components/Footer/Footer';

function ErrorPage({ cursorVariant, setCursorVariant, toggleTheme, theme }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    const error = useRouteError();
    console.error(error);

    return (
        <React.StrictMode>
            <div className={`${styles.PageContainer} page-container`}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
                <div className={styles.ErrorPage}>
                    <span className={styles.ErrorStatus}>{error.status}</span>
                    <span className={styles.ErrorDesc}>Oups! La page que vous demandez n'existe pas.</span>
                    <Link to={APP_PATHS.HOME} className={styles.HomeLink} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                        Retourner sur la page d’accueil
                    </Link>
                </div>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
            <ScrollRestoration />
        </React.StrictMode>
    )
}

export default ErrorPage;