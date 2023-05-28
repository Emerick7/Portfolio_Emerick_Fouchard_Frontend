import styles from './Header.module.css';
import mailLogo from '../../assets/mail-logo.svg';
import sunLogo from '../../assets/sun-logo.svg';
import moonLogo from '../../assets/moon-logo.svg';
import fileLogo from '../../assets/file-logo.svg';
import resumeLogo from '../../assets/resume-logo.svg';
import servicesLogo from '../../assets/services-pc-logo.svg';
import { Link } from 'react-router-dom';
import { APP_PATHS, CONTACT_PATHS } from '../../utils/paths';

function Header({ cursorVariant, setCursorVariant }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");
    
    function darkBrightMode() {

    };

    return (
        <header className={styles.Header}>
            <div className={styles.LeftSideHeader}>
                <Link to={APP_PATHS.HOME} className={styles.EmerickLogo} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    <span>E</span>merick
                </Link>
                <Link to={CONTACT_PATHS.MAIL} className={styles.ContactEmail} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    <img src={mailLogo} alt='email_logo_emerick_fouchard'/>
                    fouchardemerick@gmail.com
                </Link>
            </div>
            <img src={sunLogo} className={styles.DBModeImg} onClick={darkBrightMode} alt='dark-bright-mode-emerick-fouchard' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}/>
            <nav className={styles.Nav}>
                <ul>
                    <li>
                        <Link to={APP_PATHS.PORTFOLIO} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            <img src={fileLogo} alt='portfolio_logo_emerick_fouchard'/>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to={APP_PATHS.RESUME} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            <img src={resumeLogo} alt='Curriculum_Vitae_logo_emerick_fouchard'/>
                            Curriculum Vitae
                        </Link>
                    </li>
                    <li>
                        <Link to={APP_PATHS.SERVICES} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            <img src={servicesLogo} alt='services_logo_emerick_fouchard'/>
                            Services
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;