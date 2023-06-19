import { Link } from 'react-router-dom';
import styles from './StayConnected.module.css';
import { motion } from 'framer-motion';
import { SOCIAL_PATHS, CONTACT_PATHS } from '../../utils/constants';
import WhatsAppLogo from '../../assets/whatsapp-logo.svg';
import InstagramLogo from '../../assets/instagram-logo.svg';

function StayConnected({cursorVariant, setCursorVariant}) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    //Logos animation
    const onHover = { scale: 1.2 }
    const transitionOnHover = {
        type: "spring",
        stiffness: 400,
        damping: 10
    }

    return (
        <aside className={styles.AsideContainer}>
            <h4>Restons connectés</h4>
            <p>Besançon, France</p>
            <Link
                to={CONTACT_PATHS.MAIL}
                onMouseEnter={hoverEnter}
                onMouseLeave={hoverLeave}
                target="_blank"
                >
                fouchardemerick@gmail.com
            </Link>
            <div className={styles.ContactButtonsDiv}>
                <Link to={CONTACT_PATHS.WHATSAPP} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} target="_blank">
                    <motion.img
                        src={WhatsAppLogo}
                        whileHover={onHover}
                        transition={transitionOnHover}
                    />
                </Link>
                <Link to={SOCIAL_PATHS.INSTAGRAM} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} target="_blank">
                    <motion.img
                        src={InstagramLogo}
                        whileHover={onHover}
                        transition={transitionOnHover}
                    />
                </Link>
            </div>
        </aside>
    );
}

export default StayConnected;