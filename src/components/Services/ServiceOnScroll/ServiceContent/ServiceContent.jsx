import styles from './ServiceContent.module.css';
import '../../Services.css';
import { useRef } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    useSpring
  } from "framer-motion";

function ServiceContent({ title, alt, src, desc }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    function useParallax(outputValue1, outputValue2, outputValue3) {
        return useTransform(scrollYProgress, [0, 0.5, 1], [outputValue1, outputValue2, outputValue3]);
    }

    return (
        <div className={`img-desc-div ${styles.ImgDescDiv}`} ref={ref}>
            <motion.img 
                style={{ y: useParallax(0, 0, -400), opacity: useParallax(1, 1, 0) }}
                src={src}
                alt={alt} />
            <article className={`service-description ${styles.Description}`} >
                <motion.h2 style={{ y: useParallax(0, 0, 800), opacity: useParallax(1, 1, 0) }} >
                    {title}
                </motion.h2>
                <motion.p style={{ y: useParallax(0, 0, 400), opacity: useParallax(1, 1, 0) }} >
                    {desc}
                </motion.p>
            </article>
        </div>
    );
}

export default ServiceContent;