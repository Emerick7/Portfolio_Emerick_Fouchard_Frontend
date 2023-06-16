import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './AddWork.module.css';
import WorkForm from '../../components/Works/WorkForm/WorkForm';
import { useUser } from '../../lib/customHooks';
import { APP_PATHS } from '../../utils/constants';

function AddWork() {
  const navigate = useNavigate();
  const { connectedUser, auth, userLoading } = useUser();
  const [created, setCreated] = useState(false);
  useEffect(() => {
    if (!userLoading) {
      if (!connectedUser || !auth) {
        navigate(APP_PATHS.SIGN_IN);
      }
    }
  }, [userLoading]);

  return (
    <div className="content-container">
      <Link to={APP_PATHS.HOME}>Retour à la page d'accueil</Link>
      <Link to={APP_PATHS.SIGN_IN}>Retour à la page de connexion</Link>
      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Ajouter un projet</h1>
            <p>tous les champs sont obligatoires</p>
            <WorkForm validate={setCreated} />
          </>
        ) : (
          <div className={styles.Created}>
            <h1>Merci!</h1>
            <p>votre projet a bien été publié</p>
            <Link to={APP_PATHS.DASHBOARD} className="button">Retour au Dashboard</Link>
          </div>

        )}

      </div>
    </div>
  );
}

export default AddWork;
