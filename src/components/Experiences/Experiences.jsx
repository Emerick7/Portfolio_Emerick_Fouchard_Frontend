import React from 'react';
import styles from './Experiences.module.css';
import { motion } from 'framer-motion';

function Experiences() {


    return (
        <div className={styles.ExpContainer}>
            <div className={styles.WorksTop}>
                <h2>Expérience professionnelle</h2>
                <h3>Une timeline de mes expériences professionnelles marquantes</h3>
                <hr className={styles.Separator}/>
            </div>
            <article className={styles.ArticleExp}>
                <section>
                    <h4>Magasinier (2018 - 2019)</h4>
                </section>
                <section>
                    <h4>Professeur particulier de français (2020 - 2021)</h4>
                </section>
                <section>
                    <h4>Youtube (choix du contenu, montage, gestion des vidéos) (2021 - 2021)</h4>
                </section>
                <section>
                    <h4>Développeur WordPress, réalisation et maintenance (2020)</h4>
                </section>
                <section>
                    <h4>Consultant en référencement SEO (2022)</h4>
                </section>
                <section>
                    <h4>Développeur Web Full-Stack JavaScript (2023)</h4>
                </section>
                <div className={styles.Timeline}>
                    <div className={styles.Dot}/>
                    <div className={styles.Dot}/>
                    <div className={styles.Dot}/>
                    <div className={styles.Dot}/>
                    <div className={styles.Dot}/>
                    <div className={styles.Dot}/>
                    <div className={styles.Line}/>
                </div>
            </article>
        </div>
    );
}

export default Experiences;