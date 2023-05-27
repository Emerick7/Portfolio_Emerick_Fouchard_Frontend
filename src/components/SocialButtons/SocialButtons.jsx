import React from 'react';
import { Link } from 'react-router-dom';
import { useHover } from '@react-hooks-library/core';
import styles from './SocialButtons.module.css';
import Pulse from 'react-reveal/Pulse';
import linkedinLogo from '../../assets/linkedin-logo.svg';
import githubLogo from '../../assets/github-logo.svg';
import twitterLogo from '../../assets/twitter-logo.svg';
import { SOCIAL_PATHS } from '../../utils/paths';

function SocialButtons() {
    const refImgLinkedin = React.useRef()
    const isHoveredLinkedin = useHover(refImgLinkedin);

    const refImgGithub = React.useRef()
    const isHoveredGithub = useHover(refImgGithub);

    const refImgTwitter = React.useRef()
    const isHoveredTwitter = useHover(refImgTwitter);

    return (
        <aside className={styles.SocialButtonsAside}>
            <Pulse spy={isHoveredLinkedin}>
                <Link to={SOCIAL_PATHS.LINKEDIN}><img src={linkedinLogo} ref={refImgLinkedin}/></Link>
            </Pulse>
            <Pulse spy={isHoveredGithub}>
                <Link to={SOCIAL_PATHS.GITHUB}><img src={githubLogo} ref={refImgGithub}/></Link>
            </Pulse>
            <Pulse spy={isHoveredTwitter}>
                <Link to={SOCIAL_PATHS.TWITTER}><img src={twitterLogo} ref={refImgTwitter}/></Link>
            </Pulse>
        </aside>
    );
}

export default SocialButtons;