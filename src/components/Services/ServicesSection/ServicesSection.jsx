import {
    motion,
  } from "framer-motion";
import styles from './ServicesSection.module.css';
import ServiceOnScroll from '../ServiceOnScroll/ServiceOnScroll';
import ServicesArray from 'public-data/services';
import { Link } from "react-router-dom";
import { APP_PATHS } from "../../../utils/constants";

function ServicesSection() {
    const divVariants = {
        initial: { width: 50 },
        onHover: {
            width: 250,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }

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
            <Link to={APP_PATHS.SERVICES} className={styles.LinkToServices}>
                <motion.div
                    initial="initial"
                    whileHover="onHover"
                    >
                    <motion.div
                        className={styles.DivAnimOnHover}
                        variants={divVariants}
                    />
                    <p>Voir mes services</p>
                </motion.div>
            </Link>
        </article>
    );
}

export default ServicesSection;