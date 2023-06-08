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
            <div className={styles.ServiceTop}>
                <h2>Services</h2>
                <h3>Ce que je peux faire</h3>
                <hr className={styles.Separator}/>
            </div>
            <section className={styles.ServicesSection}>
                {ServicesArray.map((service, index) => (
                    <ServiceOnScroll key={service.id} title={service.title} alt={service.alt} src={service.src} desc={service.desc} />
                ))}
            </section>
        </article>
    );
}

export default ServicesSection;