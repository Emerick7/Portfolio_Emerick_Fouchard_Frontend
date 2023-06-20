import styles from './AboutMe.module.css';
import { motion } from 'framer-motion';
import aboutMePhoto from '../../assets/about-me-photo.webp';

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
              <div>
                <motion.img src={aboutMePhoto} alt="emerick-fouchard-about-me-developper-full-stack" />
                <div className={styles.AboutMeDesc}>
                    <h2>Emerick Fouchard</h2>
                    <h3>Métier : Développeur Full-Stack JavaScript</h3>
                    <h3>Lieu : Besançon, France</h3>
                    <h3>Particularité : Voyage régulierement à Shillong, Inde</h3>
                    <h3>Fun fact : Fan et joueur invétéré de Rocket League depuis 2016</h3>
                </div>
              </div>
              <p>
                Je suis un Développeur Full-Stack junior passionné par la création d'applications web et autres applications depuis mon adolescence. 
                Mon épouse étant Indienne, nous sommes toujours entre la France et l'Inde. Mon métier me permet désormais de pouvoir travailler de n'importe où.
                <br/><br/>
                Diplômé avec une solide formation et une expérience pratique dans le développement front-end et back-end, 
                je suis constamment motivé par le désir d'apprendre de nouvelles technologies et de relever des défis. 
                Mon objectif est de créer des produits numériques qui offrent une expérience utilisateur exceptionnelle 
                et qui répondent aux besoins spécifiques de mes clients.
              </p>
            </motion.article>
        </motion.section>
    );
}

export default AboutMe;