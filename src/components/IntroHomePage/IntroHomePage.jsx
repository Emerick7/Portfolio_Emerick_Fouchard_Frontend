import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import styles from './IntroHomePage.module.css';
import photoBackground from '../../assets/photo_portfolio_emerick_fouchard.svg'
import { CONTACT_PATHS } from '../../utils/constants';
import { Link } from 'react-router-dom';

function IntroHomePage({ cursorVariant, setCursorVariant }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    const h1Line1 = 'Emerick';
    const h1Line2 = 'Fouchard.';

    const sentence = {
        initial: { y: 0 },
        show: {
            y: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.05,
                durationChildren: .1,
            }
        }
    };

    const letter = {
        initial: { y: 80 },
        show: {
            y: 0,
            transition: {
                damping: 0
            }
        }
    };

    return (
        <React.StrictMode>
            <div className={styles.IntroDiv}>
                <motion.h1
                    className={styles.H1MyName}
                    variants={sentence}
                    initial='initial'
                    animate='show'>
                    
                    {h1Line1.split('').map((char, index) => {
                        return (
                            <motion.span key={char + '-' + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                    <br/>
                    {h1Line2.split('').map((char, index) => {
                        return (
                            <motion.span key={char + '-' + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}

                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 2,
                            duration: 0.5
                        } 
                    }}>
                    <Typed
                        strings={[
                            'Je suis Développeur Full-Stack',
                            'Je suis passioné de software et hardware',
                            'Je suis papa',
                            'Je suis mari',
                            'Je suis Développeur Front-End',
                            'Je suis Développeur Back-End',
                            'Je suis Développeur WordPress',
                            'Je suis Consultant SEO'
                        ]}
                        typeSpeed={50}
                        backSpeed={80}
                        startDelay={5000}
                        loop
                    />
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 2.5,
                        duration: 0.5
                    } 
                }}>
                    Jeune diplômé à l'issue d'une formation OpenClassrooms. 
                    Disponible et motivé pour mettre à profit mes compétences et enrichir mon expérience.
                </motion.p>
                <Link to={CONTACT_PATHS.MAIL} className={styles.LinkToMail} target="_blank">
                    <motion.div
                        className={styles.ButtonContact}
                        onMouseEnter={hoverEnter}
                        onMouseLeave={hoverLeave}
                        animate={{
                            opacity: [0, 0.5, 1, 1, 1],
                            scale: [1, 1, 2, 1, 1],
                            rotate: [60, -180, 0, -60, 0],
                        }}
                        transition={{
                            delay: 3.5,
                            duration: 1.5,
                            ease: "easeInOut",
                            times: [0, 0.3, 0.7, 0.8, 1],
                        }}>
                        <span>Parlons</span><span>ensemble</span>
                    </motion.div>
                </Link>
            </div>
            <div className={styles.ImgDiv}>
                <img
                    src={photoBackground}
                    className={styles.PhotoBackground}
                    alt='emerick-fouchard-developpeur-full-stack-javascript-frontend-backend'
                    /*animate={{
                        y: [0, 10, -10, 0],
                    }}
                    transition={{
                        delay: 8,
                        duration: 8,
                        times: [0, 0.33, 0.67, 1],
                        repeat: Infinity,
                        //repeatDelay: 3
                    }}*/
                    />
            </div>
        </React.StrictMode>
    );
}

export default IntroHomePage;