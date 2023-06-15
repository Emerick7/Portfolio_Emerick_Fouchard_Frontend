import styles from './Dashboard.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import WorkForm from '../../components/Works/WorkForm/WorkForm';
import { useUser } from '../../lib/customHooks';
import { APP_PATHS } from '../../utils/constants';

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

    return (
        <React.StrictMode>
            <Link to={APP_PATHS.ADD_WORK}>Ajouter un projet</Link>
        </React.StrictMode>
    );
}

export default Dashboard;