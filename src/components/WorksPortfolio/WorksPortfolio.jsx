import styles from './WorksPortfolio.module.css';
import React, { useState, useEffect } from 'react';
import SingleWork from '../Works/SingleWork/SingleWork';
import { getWorks } from '../../lib/common';
import { Link } from 'react-router-dom';
import RedirectionBottomPage from '../RedirectionBottomPage/RedirectionBottomPage';
import { APP_PATHS } from '../../utils/constants';

function WorksPortfolio({ cursorVariant, setCursorVariant }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    //GET Works from API

    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true);

    const displayWorks = () => (works ? works.map(
      (work) => 
        <Link to={work.url} target="_blank" onMouseEnter={hoverEnter} onMouseLeave={hoverLeave} key={work._id}>
          <SingleWork work={work} key={work.id} />
        </Link>
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

    // Texte redirection bottom page

    const textParagraphs = {
        textParagraph1: "Vous voulez mieux connaître mon métier ?",
        textParagraph2: "Voir mon CV 👉",
        buttonText: "Voir mon CV",
        link: APP_PATHS.RESUME
    }
    
    return (
        <main className={styles.MainPortfolio}>
            <article>
                <div className={styles.WorksTop}>
                    <h2>Mon travail et mes projets</h2>
                    <h3>Voici quelques uns de mes projets et réalisations passées en tant que Développeur Web Full-stack et Webmaster.</h3>
                    <hr className={styles.Separator}/>
                </div>
                <div className={styles.WorksDiv}>
                    {loading ? <h1>Chargement</h1> : displayWorks()}
                </div>
            </article>
            <RedirectionBottomPage 
                cursorVariant={cursorVariant}
                setCursorVariant={setCursorVariant}
                textParagraphs={textParagraphs}
                />
        </main>
    );
}

export default WorksPortfolio;