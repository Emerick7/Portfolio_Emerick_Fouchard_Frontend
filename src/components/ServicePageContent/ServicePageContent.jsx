import React from 'react';
import styles from './ServicePageContent.module.css';
import { motion } from 'framer-motion';

function ServicePageContent({ service, cursorVariant, setCursorVariant }) {
    function checkIndexIsEven (n) {
        return n % 2 === 0;
    }

    return(
        <React.StrictMode>
            <div className={styles.H1Div} style={{background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${service.cover})`}}>
                <h1>{service.h1}</h1>
            </div>
            <article>
                {service.content.map((section, index) => {
                    let variants = [];

                    return (
                        <motion.section
                            key={index}
                            className={styles.SectionArticle}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            variantsX={checkIndexIsEven(index) ? variants=[{
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
                            },
                            {
                                offscreen: {
                                    x: 200,
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
                            }] : variants=[{
                                offscreen: {
                                    x: 200,
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
                            },
                            {
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
                            }]}>
                            <div className={styles.ContentDiv}>
                                <motion.div
                                    variants={variants[0]}>
                                    { section.h2 ? <h2>{section.h2}</h2>: null }
                                    { section.h3 ? <h3>{section.h3}</h3>: null }
                                    { section.paragraph ? <p>{section.paragraph}</p>: null }
                                </motion.div>
                                { section.image ? 
                                    <motion.div className={styles.ImgDiv} variants={variants[1]}>
                                        <img src={section.image} alt={section.imgAlt}/>
                                    </motion.div> : null 
                                }
                            </div>
                        </motion.section>
                    )}
                )}
            </article>
        </React.StrictMode>
    );
}

export default ServicePageContent;