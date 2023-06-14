import styles from './Header.module.css';
import mailLogo from '../../assets/mail-logo.svg';
import sunLogo from '../../assets/sun-logo.svg';
import moonLogo from '../../assets/moon-logo.svg';
import fileLogo from '../../assets/file-logo.svg';
import resumeLogo from '../../assets/resume-logo.svg';
import servicesLogo from '../../assets/services-pc-logo.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { APP_PATHS, CONTACT_PATHS } from '../../utils/constants';

function Header({ cursorVariant, setCursorVariant }) {
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
    
    function darkBrightMode() {

    };

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
                        onMouseLeave={hoverLeave}>
                            <img src={mailLogo} alt='email_logo_emerick_fouchard'/>
                            fouchardemerick@gmail.com
                    </Link>
                </motion.div>
            </div>
            <img src={sunLogo} className={styles.DBModeImg} onClick={darkBrightMode} alt='dark-bright-mode-emerick-fouchard' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}/>
            <nav className={styles.Nav}>
                <ul>
                    <motion.li whileHover={onHover} transition={transitionOnHover}>
                        <Link to={APP_PATHS.PORTFOLIO} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
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
        </header>
    );
}

export default Header;