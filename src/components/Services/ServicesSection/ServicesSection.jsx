import {
    motion,
    useScroll,
    useSpring
  } from "framer-motion";
import styles from './ServicesSection.module.css';
import ServiceOnScroll from '../ServiceOnScroll/ServiceOnScroll';
import ServicesArray from 'public-data/services';

function ServicesSection() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <article>
            <h2>Services</h2>
            <h3>Ce que je peux faire</h3>
            <hr/>
            <section className={styles.ServicesSection}>
            {ServicesArray.map((service) => (
                <ServiceOnScroll id={service.id} alt={service.alt} src={service.src} />
            ))}
            <motion.div className={styles.Progress} style={{ scaleX }} />
            </section>
        </article>
    );
}

export default ServicesSection;