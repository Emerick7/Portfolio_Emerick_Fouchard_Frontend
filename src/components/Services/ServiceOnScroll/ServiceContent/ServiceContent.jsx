import styles from './ServiceContent.module.css';
import '../../Services.css';
import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring
  } from "framer-motion";

function useParallax(value, position, distance) {
    return useTransform(value, [0, 0.5, 1], [position, position, distance]);
}

function ServiceContent({ title, alt, src, desc }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 0, -400);

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0])

    return (
        <div className={`img-desc-div ${styles.ImgDescDiv}`} ref={ref}>
            <motion.img 
                style={{ y, opacity: opacity }}
                src={src}
                alt={alt} />
            <article className={`service-description ${styles.Description}`} >
                <motion.h2>{title}</motion.h2>
                <p>{desc}</p>
            </article>
        </div>
    );
}

export default ServiceContent;