import styles from './AboutMe.module.css';
import { motion } from 'framer-motion';
import aboutMePhoto from '../../assets/about-me-photo-1.webp';

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

    const variantsCardOverlay = {
        initial: {
          left: 0,
        },
        onHover: {
          left: "-38vw",
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2
          }
        }
    }

    const variantCardDesc = {
        initial: {
          left: 0,
          color: "#CAD3C8",
        },
        onHover: {
          left: "38vw",
          color: "#3B3B98",
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.4
          }
        }
    }

    /*const variantCardImg = {
        initial: {
          filter: "brightness(100%)"
        },
        onHover: {
          filter: "brightness(100%)",
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.4
          }
        }
    }*/

    const variantCardDots = {
      initial: {
        left: "16vw"
      },
      onHover: {
        left: "54vw",
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
          delay: 0.4
        }
      }
    }

    return (
        <motion.section
            className={styles.AboutMeSection}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            >
            <div className={styles.SplashWallet}></div>
            <motion.article
                className={styles.AboutMeCard}
                variants={variants}
            >
              <motion.div
                className={styles.Div}
                initial="initial"
                whileHover="onHover"
                >
                <motion.div
                  variants={variantsCardOverlay}
                  >
                  <motion.div 
                    className={styles.AboutMeDesc}
                    variants={variantCardDesc}
                    >
                      <h2>Emerick Fouchard</h2>
                      <h3>Métier : Développeur Full-Stack JavaScript</h3>
                      <h3>Lieu : Besançon, France</h3>
                      <h3>Particularité : Voyage régulierement à Shillong, Inde</h3>
                      <h3>Fun fact : Fan et joueur invétéré de Rocket League depuis 2016</h3>
                  </motion.div>
                  <motion.img
                    src={aboutMePhoto}
                    alt="emerick-fouchard-about-me-developper-full-stack"
                    //variants={variantCardImg}
                    />
                  <motion.div
                    variants={variantCardDots}>
                    <div/>
                    <div/>
                    <div/>
                  </motion.div>
                </motion.div>
                <p>
                  Je suis un Développeur Full-Stack et Webmaster basé à Besançon, et passionné par la création d'applications web et autres applications depuis mon adolescence. 
                  Mon épouse étant Indienne, nous sommes toujours entre la France et l'Inde. Mon métier me permet de pouvoir travailler de n'importe où.
                  <br/><br/>
                  Diplômé avec une solide formation et une expérience pratique dans le développement front-end et back-end, 
                  je suis motivé par le désir d'apprendre de nouvelles technologies et de relever des défis. 
                  Mon objectif est de créer des produits numériques qui offrent une expérience utilisateur de qualité 
                  et qui répondent aux besoins spécifiques de mes clients.
                  <br/><br/>
                  Grâce à mes compétences étendues en développement front-end et back-end, je suis en mesure de concevoir et de mettre en œuvre des solutions web complètes, 
                  du design initial à la mise en production. J'apprécie particulièrement l'optimisation des performances, la sécurisation des sites et l'amélioration de l'expérience utilisateur. 
                  Travailler en tant que développeur web à Besançon quand je suis en France et dans la belle ville de Shillong quand je suis en Inde est un véritable plaisir, 
                  et je suis toujours prêt à relever de nouveaux défis passionnants pour créer des projets web de qualité.
                </p>
              </motion.div>
            </motion.article>
        </motion.section>
    );
}

export default AboutMe;