import styles from './SingleWork.module.css';
import React from 'react';
import {
    motion
  } from "framer-motion";

function SingleWork({ work }) {
    const variants = {
        initial: {
            y: 0,
            opacity: 0
        },
        onHover: {
            y: -5,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
              }
        }
    }

    return (
        <motion.div 
            className={styles.WorkLi}
            initial="initial"
            whileHover="onHover"
            >
            <img src={work.imgUrl} alt={`${work.title}, Emerick Fouchard Developper Full-Stack - ${work.year}`}/>
            <motion.div
                className={styles.WorkDetails}
                variants={variants}
                >
                <div className={styles.DivTitleYear}>
                    <h3 className={styles.TextTitleYear}>{work.title}</h3>
                    <p className={styles.TextTitleYear}>{work.year}</p>
                </div>
                <p>{work.desc}</p>
            </motion.div>
        </motion.div>
    );
}

export default SingleWork;