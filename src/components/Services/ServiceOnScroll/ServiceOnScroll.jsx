import React from 'react';
import { useRef } from 'react';
import {
    motion,
    useScroll,
  } from "framer-motion";
import styles from './ServiceOnScroll.module.css';

function ServiceOnScroll({ id, alt, src }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    return (
        <section className={styles.ServiceContainer}>
            <div ref={ref} className={styles.ServiceDiv}>
                <figure className={styles.Progress}>
                    <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" pathLength="1" className={styles.Bg} />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="30"
                            pathLength="1"
                            className={styles.Indicator}
                            style={{ pathLength: scrollYProgress }}
                        />
                    </svg>
                </figure>
                <img src={src} alt={alt} />
                <motion.h2>{`#00${id}`}</motion.h2>
            </div>
        </section>
    );
}

export default ServiceOnScroll;