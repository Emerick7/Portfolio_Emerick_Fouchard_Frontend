import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import IntroHomePage from '../../components/IntroHomePage/IntroHomePage';

function Home({ cursorVariant, setCursorVariant }) {
    return (
        <React.StrictMode>
            <div className={styles.PageContainer}>
                <Header cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <SocialButtons cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <IntroHomePage cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
                <main>
                    <section>

                    </section>
                    <article>
                        <section>

                        </section>
                    </article>
                    <aside>

                    </aside>
                </main>
            </div>
            <Footer cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
        </React.StrictMode>
    );
}

export default Home;