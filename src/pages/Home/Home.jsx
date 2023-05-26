import React from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <React.StrictMode>
            <div className={styles.PageContainer}>
                <Header />
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
            <Footer />
        </React.StrictMode>
    );
}

export default Home;