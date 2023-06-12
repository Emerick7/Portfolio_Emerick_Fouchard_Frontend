import styles from './Works.module.css';
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Work from './Work/Work';

function Works() {
    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    return (
        <section>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <motion.circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="indicator"
                style={{ pathLength: scrollXProgress }}
                />
            </svg>
            <ul ref={ref}>
                {WorksArray.map((work, index) => (
                    <Work key={index}/>
                ))}
            </ul>
        </section>
    );
}

export default Works;