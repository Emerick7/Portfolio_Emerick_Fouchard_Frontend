import styles from './WorksScroll.module.css';
import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import SingleWork from './SingleWork/SingleWork';
import { getWorks } from '../../lib/common';
import { APP_PATHS } from '../../utils/constants';
import RedirectionBottomPage from '../RedirectionBottomPage/RedirectionBottomPage';

function WorksScroll({ cursorVariant, setCursorVariant }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    //GET Works from API

    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true);

    const displayWorks = () => (works ? works.map(
      (work) => 
        <li>
            <Link to={work.url} target="_blank" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} key={work._id}>
                <SingleWork work={work} key={work.id} />
            </Link>
        </li>
      ) : <h1>Vide</h1>
    );

    useEffect(() => {
        async function getBooksList() {
          const data = await getWorks();
          if (data) {
            setWorks(data);
            setLoading(false);
          }
        }
        getBooksList();
      }, []);

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    //Variants pour bouton

    const divVariants = {
      initial: { width: 50 },
      onHover: {
          width: 180,
          transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.8
          }
      }
    }

    // Texte redirection bottom page

    const textParagraphs = {
      textParagraph1: "Vous voulez mieux connaître mon métier ?",
      textParagraph2: "Voir mon CV 👉",
      buttonText: "Voir mon CV",
      link: APP_PATHS.RESUME
    }

    return (
      <React.StrictMode>
        <section className={styles.WorksSection}>
            <div className={styles.ServiceTop}>
                <h2>Mes Projets et Réalisations</h2>
                <h3>Vous voulez voir des exemples de mon travail ? Voici quelques uns de mes projets et réalisations passées en tant que Développeur Web Full-stack et Webmaster.</h3>
                <hr className={styles.Separator}/>
            </div>
            <svg className={styles.Progress} width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className={styles.Bg} />
                <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className={styles.Indicator}
                style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <ul ref={ref} className={styles.WorksList}>
                    {loading ? <h1>Chargement</h1> : displayWorks()}
            </ul>
        </section>
        <RedirectionBottomPage 
                cursorVariant={cursorVariant}
                setCursorVariant={setCursorVariant}
                textParagraphs={textParagraphs}
                />
      </React.StrictMode>
    );
}

export default WorksScroll;