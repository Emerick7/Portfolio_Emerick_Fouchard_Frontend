import styles from './WorksScroll.module.css';
import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Work from './SingleWork/SingleWork';
import { getWorks } from '../../lib/common';

function WorksScroll() {
    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line max-len
    const displayWorks = () => (works ? works.map((work) => <Work size={2} work={work} key={work.id} />) : <h1>Vide</h1>);

    useEffect(() => {
        async function getWorksList() {
          const data = await getWorks();
          if (data) {
            setWorks(data);
            setLoading(false);
          }
        }
        getWorksList();
      }, []);

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <section>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <ul ref={ref}>
                <section className={styles.workList}>
                    {loading ? <h1>Chargement</h1> : displayWorks()}
                </section>
            </ul>
        </section>
    );
}

export default WorksScroll;