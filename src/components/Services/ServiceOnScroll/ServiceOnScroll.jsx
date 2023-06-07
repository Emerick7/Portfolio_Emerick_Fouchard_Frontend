import React from 'react';
import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue
  } from "framer-motion";
import styles from './ServiceOnScroll.module.css';

function ServiceOnScroll({ id, alt, src }) {

    console.log(src)

    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 600);

    return (
        <React.StrictMode>
            <div className={styles.ServiceDiv} ref={ref}>
                <img src={src} alt={alt} />
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </React.StrictMode>
    );
}

export default ServiceOnScroll;