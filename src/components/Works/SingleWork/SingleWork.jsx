import styles from './SingleWork.module.css';
import React from 'react';

function SingleWork({ work }) {
    //const backgroundImageStyle = { backgroundImage: `url(${work.imgUrl})` };

    return (
        <li className={styles.WorkLi}>
            <img src={work.imgUrl} alt={`${work.title}, Emerick Fouchard Developper Full-Stack - ${work.year}`}/>
            <div className={styles.WorkDetails}>
                <h3>{work.title}</h3>
                <p>{work.year}</p>
                <p>{work.desc}</p>
            </div>
        </li>
    );
}

export default SingleWork;