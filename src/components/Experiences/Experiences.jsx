import styles from './Experiences.module.css';
import { motion } from 'framer-motion';

function Experiences() {


    return (
        <article className={styles.ArticleExp}>
            <section>
                <h3>Magasinier (2018 - 2019)</h3>
            </section>
            <section>
                <h3>Professeur particulier de français (2020 - 2021)</h3>
            </section>
            <section>
                <h3>Youtube (choix du contenu, montage, gestion des vidéos) (2021 - 2021)</h3>
            </section>
            <section>
                <h3>Développeur WordPress, réalisation et maintenance (2020)</h3>
            </section>
            <section>
                <h3>Consultant en référencement SEO (2022)</h3>
            </section>
            <section>
                <h3>Développeur Web Full-Stack JavaScript (2023)</h3>
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
    );
}

export default Experiences;