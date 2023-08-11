import styles from './Header.module.css';
import mailLogo from '../../assets/mail-logo.svg';
import sunLogo from '../../assets/sun-logo.svg';
import moonLogo from '../../assets/moon-logo.svg';
import homeLogo from '../../assets/home.svg';
import fileLogo from '../../assets/file-logo.svg';
import resumeLogo from '../../assets/resume-logo.svg';
import servicesLogo from '../../assets/services-pc-logo.svg';
import FrontendLogo from '../../assets/frontend-logo.svg';
import BackendLogo from '../../assets/backend-logo.svg';
import WordpressLogo from '../../assets/wordpress-logo.svg';
import SEOLogo from '../../assets/seo-logo.svg';
import OptimizationLogo from '../../assets/website-optimization-logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_PATHS, CONTACT_PATHS } from '../../utils/constants';
import { useState } from 'react';

const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

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

    //Menu déroulant
    const [isOpen, setIsOpen] = useState(false);

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
                            <motion.li
                                className={styles.ServicesMenu}
                                initial={false}
                                animate={isOpen ? "open" : "closed"}
                                >
                                <motion.button
                                    className={`${styles.ServicesButton} services-button`}
                                    whileTap={{ scale: 0.97 }}
                                    onClick={() => setIsOpen(!isOpen)}
                                    onMouseEnter={hoverEnter}
                                    onMouseLeave={hoverLeave}
                                >
                                    <div>
                                        <img src={servicesLogo} alt='services_logo_emerick_fouchard'/>
                                        <span>Services</span>
                                    </div>
                                    <motion.div
                                    variants={{
                                        open: { rotate: 180 },
                                        closed: { rotate: 0 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{ originY: 0.55 }}
                                    className={`${styles.DivArrowSvg} div-arrow-svg`}
                                    >
                                    <svg width="15" height="15" viewBox="0 0 20 20">
                                        <path d="M0 7 L 20 7 L 10 16" />
                                    </svg>
                                    </motion.div>
                                </motion.button>
                                <motion.ul
                                    className={`${styles.ListServices} list-services`}
                                    variants={{
                                    open: {
                                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                                        transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.7,
                                        delayChildren: 0.3,
                                        staggerChildren: 0.05
                                        }
                                    },
                                    closed: {
                                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                                        transition: {
                                        type: "spring",
                                        bounce: 0,
                                        duration: 0.3
                                        }
                                    }
                                    }}
                                    style={{ pointerEvents: isOpen ? "auto" : "none" }}
                                >
                                    <motion.li variants={itemVariants}>
                                        <Link to={APP_PATHS.FRONTEND} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                            <img src={FrontendLogo} alt='frontend_logo_emerick_fouchard'/>
                                            Frontend
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <Link to={APP_PATHS.BACKEND} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                            <img src={BackendLogo} alt='backend_logo_emerick_fouchard'/>
                                            Backend
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <Link to={APP_PATHS.WORDPRESS} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                            <img src={WordpressLogo} alt='wordpress_logo_emerick_fouchard'/>
                                            WordPress
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <Link to={APP_PATHS.SEO} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                            <img src={SEOLogo} alt='SEO_logo_emerick_fouchard'/>
                                            SEO
                                        </Link>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <Link to={APP_PATHS.OPTIMIZATION} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                                            <img src={OptimizationLogo} alt='website_optimization_logo_emerick_fouchard'/>
                                            Optimisation
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </motion.li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;