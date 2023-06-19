import styles from './Dashboard.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../lib/customHooks';
import { APP_PATHS } from '../../utils/constants';
import { getWorks } from '../../lib/common';
import SingleWork from '../../components/Works/SingleWork/SingleWork';

function Dashboard() {
    const navigate = useNavigate();
    const { connectedUser, auth, userLoading } = useUser();
    useEffect(() => {
        if (!userLoading) {
        if (!connectedUser || !auth) {
            navigate(APP_PATHS.SIGN_IN);
        }
        }
    }, [userLoading]);

    //GET Works from API

    const [works, setWorks] = useState(null);
    const [loading, setLoading] = useState(true);

    const displayWorks = () => (works ? works.map((work) => <React.StrictMode><Link to={`${APP_PATHS.UPDATE_WORK}/${work._id}`}>Modifier</Link> <SingleWork work={work} key={work.id} /></React.StrictMode>) : <h1>Vide</h1>);

    useEffect(() => {
        async function getBooksList() {
          const data = await getWorks();
          if (data) {
            setWorks(data);
            setLoading(false);
          }
        }
        getBooksList();
      }, []);

    return (
        <React.StrictMode>
            <Link to={APP_PATHS.HOME}>Retourner sur la page d'acccueil</Link>
            <Link to={APP_PATHS.ADD_WORK}>Ajouter un projet</Link>
            <section className={styles.workList}>
                {loading ? <h1>Chargement</h1> : displayWorks()}
            </section>
        </React.StrictMode>
    );
}

export default Dashboard;