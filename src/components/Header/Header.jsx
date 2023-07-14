import styles from './Header.module.css';
import mailLogo from '../../assets/mail-logo.svg';
import sunLogo from '../../assets/sun-logo.svg';
import moonLogo from '../../assets/moon-logo.svg';
import homeLogo from '../../assets/home.svg';
import fileLogo from '../../assets/file-logo.svg';
import resumeLogo from '../../assets/resume-logo.svg';
import servicesLogo from '../../assets/services-pc-logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_PATHS, CONTACT_PATHS } from '../../utils/constants';
import { useState } from 'react';

function Header({ cursorVariant, setCursorVariant, toggleTheme, theme }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    const onHover = {
        scale: 1.1,
        rotate: -5,
        backgroundColor: '#FD7272'
    }

    const transitionOnHover = {
        type: "spring",
        stiffness: 400,
        damping: 10
    }

    return (
        <header className={styles.Header}>
            <div className={styles.LeftSideHeader}>
                <Link to={APP_PATHS.HOME} className={styles.EmerickLogo} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    <span>E</span>merick
                </Link>
                <motion.div className={styles.MailDiv} whileHover={onHover} transition={transitionOnHover}>
                    <Link
                        to={CONTACT_PATHS.MAIL}
                        className={styles.ContactEmail}
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        target="_blank"
                        >
                            <img src={mailLogo} alt='email_logo_emerick_fouchard'/>
                            fouchardemerick@gmail.com
                    </Link>
                </motion.div>
            </div>
            <div className={styles.DivHamburger}>
                <input type="checkbox" className={styles.MenuInput}/>
                    <span className={styles.MenuToggleSpan}></span>
                    <span className={styles.MenuToggleSpan}></span>
                    <span className={styles.MenuToggleSpan}></span>
                <div className={styles.Menu}>
                    <img src={theme === "dark" ? moonLogo : sunLogo} className={styles.DBModeImg} onClick={toggleTheme} alt='dark-bright-mode-emerick-fouchard' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}/>
                    <nav className={styles.Nav}>
                        <ul>
                            <motion.li whileHover={onHover} transition={transitionOnHover}>
                                <Link to={APP_PATHS.HOME} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                    <img src={homeLogo} alt='portfolio_logo_emerick_fouchard'/>
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li whileHover={onHover} transition={transitionOnHover}>
                                <Link to={APP_PATHS.WORKS} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                    <img src={fileLogo} alt='portfolio_logo_emerick_fouchard'/>
                                    Portfolio
                                </Link>
                            </motion.li>
                            <motion.li whileHover={onHover} transition={transitionOnHover}>
                                <Link to={APP_PATHS.RESUME} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                    <img src={resumeLogo} alt='Curriculum_Vitae_logo_emerick_fouchard'/>
                                    Curriculum Vitae
                                </Link>
                            </motion.li>
                            <motion.li whileHover={onHover} transition={transitionOnHover}>
                                <Link to={APP_PATHS.SERVICES} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                    <img src={servicesLogo} alt='services_logo_emerick_fouchard'/>
                                    Services
                                </Link>
                            </motion.li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;