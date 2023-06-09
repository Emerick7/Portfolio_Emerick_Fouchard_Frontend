import styles from './AboutMe.module.css';
import { delay, motion } from 'framer-motion';
import aboutMePhoto from '../../assets/about-me-photo.svg';

function AboutMe() {
    return (
        <section className={styles.AboutMeSection}>
            <motion.article
                className={styles.AboutMeBox}
                initial={{
                    scale: 1,
                    rotate: 0,
                    borderRadius: "0%"
                }}
                whileInView={{
                    scale: [1, 0.5, 0.5, 1, 1, 1],
                    rotate: [0, 0, 180, 180, 0, 0],
                    borderRadius: ["30px", "0%", "50%", "50%", "1%", "30px"]
                }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                }}
            >
                <motion.img
                    src={aboutMePhoto}
                    alt="emerick-fouchard-about-me-developper-full-stack"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 0.5, 0.5, 0.5, 1, 1] }}
                    transition={{
                        duration: 2,
                        delay: 1,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                    }}
                    />
                <div className={styles.AboutMeDesc}>
                    <h2>Mieux me connaître</h2>
                    <h3>Fun fact : Fan et joueur invétéré de Rocket League depuis 2016</h3>
                    <p>Test</p>
                </div>
            </motion.article>
        </section>
    );
}

export default AboutMe;