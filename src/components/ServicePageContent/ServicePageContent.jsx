import React from 'react';
import styles from './ServicePageContent.module.css';
import { motion } from 'framer-motion';

function ServicePageContent({ service, cursorVariant, setCursorVariant }) {
    function checkIndexIsEven (n) {
        return n % 2 === 0;
    }

    const variantsText = {
        offscreen: {
            x: +200,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1,
                delay: 0
            }
        }
    };

    const variantsImg = {
        offscreen: {
            x: -200,
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1,
                delay: 0
            }
        }
    };

    return(
        <React.StrictMode>
            <div className={styles.H1Div} style={{background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${service.cover})`}}>
                <h1>{service.h1}</h1>
            </div>
            <article>
                {service.content.map((section, index) => (
                    <motion.section
                        key={index}
                        className={styles.SectionArticle}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        variantsX={checkIndexIsEven(index) ? [+200, -200] : [-200, +200]}>
                        <div className={styles.ContentDiv}>
                            <motion.div
                                variants={variantsText}>
                                { section.h2 ? <h2>{section.h2}</h2>: null }
                                { section.h3 ? <h3>{section.h3}</h3>: null }
                                { section.paragraph ? <p>{section.paragraph}</p>: null }
                            </motion.div>
                            { section.image ? 
                                <motion.div className={styles.ImgDiv} variants={variantsImg}>
                                    <img src={section.image} alt={section.imgAlt}/>
                                </motion.div> : null 
                            }
                        </div>
                    </motion.section>
                ))}
            </article>
        </React.StrictMode>
    );
}

export default ServicePageContent;