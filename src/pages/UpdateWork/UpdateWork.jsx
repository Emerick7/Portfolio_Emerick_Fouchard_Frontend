import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './UpdateWork.module.css';
import WorkForm from '../../components/Works/WorkForm/WorkForm';
import { getWork } from '../../lib/common';
import { APP_PATHS } from '../../utils/constants';
import { useUser } from '../../lib/customHooks';

function UpdateWork() {
  const [work, setWork] = useState(null);
  const params = useParams();
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
  useEffect(() => {
    async function getItem() {
      const data = await getWork(params.workId);
      if (data) {
        setWork(data);
      }
    }
    getItem();
  }, []);

  return (
    <div className="content-container">
      <Link to={APP_PATHS.HOME}>Retour à la page d'accueil</Link>
      <Link to={APP_PATHS.SIGN_IN}>Retour à la page de connexion</Link>
      <div className={styles.Container}>
        {!created ? (
          <>
            <h1>Modifier votre projet</h1>
            <p>Vous pouvez modifier tous les champs sauf la note donnée</p>
            <WorkForm work={work} validate={setCreated} />
          </>
        ) : (
          <div className={styles.Created}>
            <h1>Merci!</h1>
            <p>votre projet a bien été mis à jour</p>
            <Link to={APP_PATHS.DASHBOARD} className="button">Retour au Dashboard</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateWork;