import React from 'react';
import styles from './ServicePageContent.module.css';

function ServicePageContent({ service, cursorVariant, setCursorVariant }) {
    /*function checkIndexIsEven (n) {
        return n % 2 === 0;
    }*/

    return(
        <React.StrictMode>
            <div className={styles.H1Div} style={{background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${service.cover})`}}>
                <h1>{service.h1}</h1>
            </div>
            <article>
                {service.content.map((section, index) => {
                    return (
                        <section
                            key={index}
                            className={styles.SectionArticle}
                            >
                            <div className={styles.ContentDiv}>
                                <div>
                                    { section.h2 ? <h2>{section.h2}</h2>: null }
                                    { section.h3 ? <h3>{section.h3}</h3>: null }
                                    { section.paragraph ? <p>{section.paragraph}</p>: null }
                                </div>
                                { section.image ? 
                                    <div className={styles.ImgDiv}>
                                        <img src={section.image} alt={section.imgAlt}/>
                                    </div> : null 
                                }
                            </div>
                        </section>
                    )}
                )}
            </article>
        </React.StrictMode>
    );
}

export default ServicePageContent;