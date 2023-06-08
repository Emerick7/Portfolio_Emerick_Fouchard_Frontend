import styles from './ServiceContent.module.css';
import '../../Services.css';
import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring
  } from "framer-motion";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [distance, -distance]);
}

function ServiceContent({ title, alt, src, desc }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref
    });
    const y = useParallax(scrollYProgress, 400);

    return (
        <div className={`img-desc-div ${styles.ImgDescDiv}`} ref={ref}>
            <motion.img style={{ y }} src={src} alt={alt} />
            <article className={`service-description ${styles.Description}`} >
                <motion.h2>{title}</motion.h2>
                <p>{desc}</p>
            </article>
        </div>
    );
}

export default ServiceContent;