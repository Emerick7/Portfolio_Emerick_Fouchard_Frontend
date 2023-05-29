import React from 'react';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import styles from './IntroHomePage.module.css';
import photoBackground from '../../assets/photo_portfolio_emerick_fouchard.svg'

function IntroHomePage() {
    const h1Line1 = 'Emerick';
    const h1Line2 = 'Fouchard.';

    const sentence = {
        initial: { y: 0 },
        show: {
            y: 0,
            transition: {
                delayChildren: 1,
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
                <h2>
                    <Typed
                        strings={[
                            'Je suis Développeur Full-Stack',
                            'Je suis passioné de software et hardware',
                            'Je suis papa',
                            'Je suis mari',
                            'Je suis Développeur Front-End',
                            'Je suis Développeur Back-End'
                        ]}
                        typeSpeed={50}
                        backSpeed={80}
                        loop
                    />
                </h2>
                <p>
                    Jeune diplômé à l'issue d'une formation OpenClassrooms. 
                    Disponible et motivé pour mettre à profit mes compétences et enrichir mon expérience.
                </p>
                <motion.button>
                    Parlons-en
                </motion.button>
            </div>
            <div className={styles.ImgDiv}>
                <img src={photoBackground} className={styles.PhotoBackground}/>
            </div>
        </React.StrictMode>
    );
}

export default IntroHomePage;