import styles from './WorksScroll.module.css';
import { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion";
import SingleWork from './SingleWork/SingleWork';
import { getWorks } from '../../lib/common';

function WorksScroll() {
    //GET Works from API

    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true);

    const displayWorks = () => (works ? works.map((work) => <Link to={work.url} target="_blank"> <SingleWork work={work} key={work.id} /> </Link>) : <h1>Vide</h1>);

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

    return (
        <section className={styles.WorksSection}>
            <div className={styles.ServiceTop}>
                <h2>Mes Projets et Réalisations</h2>
                <h3>Quelques uns de mes projets et réalisations passées</h3>
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
    );
}

export default WorksScroll;