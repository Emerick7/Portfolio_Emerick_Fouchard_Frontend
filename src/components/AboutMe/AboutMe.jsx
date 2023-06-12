import styles from './AboutMe.module.css';
import { delay, motion } from 'framer-motion';
import aboutMePhoto from '../../assets/about-me-photo.svg';

function AboutMe() {
    const variants = {
        offscreen: {
          y: 0
        },
        onscreen: {
          y: -230,
          rotate: -5,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5
          }
        }
      };

    return (
        <motion.section
            className={styles.AboutMeSection}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            >
            <div className={styles.Splash}></div>
            <motion.article
                className={styles.AboutMeBox}
                variants={variants}
            >
                <motion.img src={aboutMePhoto} alt="emerick-fouchard-about-me-developper-full-stack" />
                <div className={styles.AboutMeDesc}>
                    <h2>Mieux me connaître</h2>
                    <h3>Fun fact : Fan et joueur invétéré de Rocket League depuis 2016</h3>
                    <p>Test</p>
                </div>
            </motion.article>
        </motion.section>
    );
}

export default AboutMe;