import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { APP_PATHS } from '../../utils/constants';
import { motion } from 'framer-motion';

function Footer({ cursorVariant, setCursorVariant }) {
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
        <footer className={styles.Footer}>
            <div className={styles.TopDivFooter}>
                <Link to={APP_PATHS.HOME} className={styles.EmerickLogo} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    <span>E</span>merick
                </Link>
                <ul>
                    <motion.li whileHover={onHover} transition={transitionOnHover}>
                        <Link to={APP_PATHS.PORTFOLIO} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            Portfolio
                        </Link>
                    </motion.li>
                    <motion.li whileHover={onHover} transition={transitionOnHover}>
                        <Link to={APP_PATHS.RESUME} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            Curriculum Vitae
                        </Link>
                    </motion.li>
                    <motion.li whileHover={onHover} transition={transitionOnHover}>
                        <Link to={APP_PATHS.SERVICES} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            Services
                        </Link>
                    </motion.li>
                </ul>
                <p>© 2023 EMERICK. ALL RIGHTS RESERVED</p>
            </div>
            <div className={styles.BottomDivFooter}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </footer>
    );
}

export default Footer;