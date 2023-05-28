import styles from './IntroHomePage.module.css';
import photoCartoon from '../../assets/emerick-fouchard-cartoon.svg';

function IntroHomePage() {
    return (
        <img src={photoCartoon} className={styles.PhotoCartoon}/>
    );
}

export default IntroHomePage;