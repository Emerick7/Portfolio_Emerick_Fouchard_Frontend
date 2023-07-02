import styles from './RedirectionBottomPage.module.css';
import { APP_PATHS } from '../../utils/constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function RedirectionBottomPage({ cursorVariant, setCursorVariant, textParagraphs }) {
    const hoverEnter = () => setCursorVariant("hover");
    const hoverLeave = () => setCursorVariant("default");

    //Variants pour bouton

    const divVariants = {
        initial: { width: 50 },
        onHover: {
            width: 180,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    }

    return (
        <section className={styles.ToSection}>
            <div className={styles.ToParagraphDiv}>
                <p>{textParagraphs.textParagraph1}</p>
                <p>{textParagraphs.textParagraph2}</p>
            </div>
            <Link to={textParagraphs.link} className={styles.LinkTo} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                <motion.div
                    initial="initial"
                    whileHover="onHover"
                    >
                    <motion.div
                        className={styles.DivAnimOnHover}
                        variants={divVariants}
                    />
                    <p>{textParagraphs.buttonText}</p>
                </motion.div>
            </Link>
        </section>
    );
}

export default RedirectionBottomPage;