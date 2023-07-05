import React from 'react';
import './Error.module.css';
import { ScrollRestoration } from 'react-router-dom';

function ErrorPage() {
    return (
        <React.StrictMode>
            <ScrollRestoration />
        </React.StrictMode>
    )
}

export default ErrorPage;