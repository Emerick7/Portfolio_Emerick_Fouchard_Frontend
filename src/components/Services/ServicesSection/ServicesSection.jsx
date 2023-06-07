import {
    motion,
    useScroll,
    useSpring
  } from "framer-motion";
import styles from './ServicesSection.module.css';
import ServiceOnScroll from '../ServiceOnScroll/ServiceOnScroll';
import ServicesArray from 'public-data/services';

function ServicesSection() {
    return (
        <article>
            <h2>Services</h2>
            <h3>Ce que je peux faire</h3>
            <hr/>
            <section className={styles.ServicesSection}>
                {ServicesArray.map((service) => (
                    <ServiceOnScroll id={service.id} alt={service.alt} src={service.src} />
                ))}
            </section>
        </article>
    );
}

export default ServicesSection;