import { Link } from 'react-router-dom';
import styles from './Techs.module.css';
import { motion } from 'framer-motion';

function Techs({ cursorVariant, setCursorVariant, techs, titleH2 }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    return (
        <section className={styles.SectionTechs}>
            <h3>{titleH2}</h3>
            <div className={styles.TechsContainer}>
                {techs.map((tech) => (
                    <motion.span data-title={tech.name} key={tech.id} whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                        <Link to={tech.link} target='_blank' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            <img className={styles.ImgTech} src={tech.src} alt={tech.alt}/>
                        </Link>
                    </motion.span>
                ))}
            </div>
        </section>
    );
}

export default Techs;