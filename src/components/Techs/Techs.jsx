import { Link } from 'react-router-dom';
import styles from './Techs.module.css';

function Techs({ cursorVariant, setCursorVariant, techs, titleH2 }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    return (
        <section>
            <h3>{titleH2}</h3>
            {techs.map((tech) => (
                    <div key={tech.id}>
                        <span>{tech.name}</span>
                        <Link to={tech.link} target='_blank' onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                            <img src={tech.src} alt={tech.alt}/>
                        </Link>
                    </div>
                ))}
        </section>
    );
}

export default Techs;