import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './SocialButtons.module.css';
import linkedinLogo from '../../assets/linkedin-logo.svg';
import githubLogo from '../../assets/github-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import { SOCIAL_PATHS } from '../../utils/constants';

function SocialButtons({ cursorVariant, setCursorVariant }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    const onHover = { scale: 1.2 }
    const transitionOnHover = {
        type: "spring",
        stiffness: 400,
        damping: 10
    }

    return (
        <aside className={styles.SocialButtonsAside}>
            <Link to={SOCIAL_PATHS.LINKEDIN} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} target="_blank">
                <motion.img
                    src={linkedinLogo}
                    whileHover={onHover}
                    transition={transitionOnHover}
                />
            </Link>
            <Link to={SOCIAL_PATHS.GITHUB} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} target="_blank">
                <motion.img
                    src={githubLogo}
                    whileHover={onHover}
                    transition={transitionOnHover}
                />
            </Link>
            <Link to={SOCIAL_PATHS.TWITTER} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} target="_blank">
                <motion.img
                    src={twitterLogo}
                    whileHover={onHover}
                    transition={transitionOnHover}
                />
            </Link>
        </aside>
    );
}

export default SocialButtons;