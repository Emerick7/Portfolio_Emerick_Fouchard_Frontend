import {
    motion,
  } from "framer-motion";
import styles from './ServicesSection.module.css';
import ServiceOnScroll from '../ServiceOnScroll/ServiceOnScroll';
import ServicesArray from 'public-data/services';
import { Link } from "react-router-dom";
import { APP_PATHS } from "../../../utils/constants";
import { useEffect, useRef, useState } from 'react';

function ServicesSection({ cursorVariant, setCursorVariant, textServicesButton }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    //Variants pour bouton

    const ref = useRef();
    const [parentWidth, setParentWidth] = useState(0);

    useEffect(() => {
        if (!ref?.current?.parentElement?.clientWidth) {
          return;
        }
        setParentWidth(ref?.current?.parentElement?.clientWidth);
      }, [ref?.current?.parentElement?.clientWidth]);

    const divVariants = {
        initial: { width: 50 },
        onHover: {
            width: parentWidth,
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
                <h3>
                    Vous dirigez une entreprise dynamique ou vous avez de grands projets ? Il est temps pour vous d'avoir un site internet ou une application web qui démontre cela. 
                    C’est là que l’intervention d’un webmaster et développeur web full-stack sera productive. Choisissez la solution adaptée à vos besoins.
                </h3>
                <hr className={styles.Separator}/>
            </div>
            <section className={styles.ServicesSection}>
                {ServicesArray.map((service, index) => (
                    <ServiceOnScroll key={service.id} title={service.title} alt={service.alt} src={service.src} desc={service.desc} />
                ))}
            </section>
            <Link to={textServicesButton.link} className={styles.LinkToServices} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                <motion.div
                    initial="initial"
                    whileHover="onHover"
                    >
                    <motion.div
                        className={styles.DivAnimOnHover}
                        variants={divVariants}
                        ref={ref}
                    />
                    <p>{textServicesButton.buttonText}</p>
                </motion.div>
            </Link>
        </article>
    );
}

export default ServicesSection;