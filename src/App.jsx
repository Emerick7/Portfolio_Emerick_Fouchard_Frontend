import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import ErrorPage from './pages/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: 'projects/:projectId',
      element: <Project />
    }
  ]
);

function App() {
  return (
    <React.StrictMode>
      <div id='main-page-render'>
        <RouterProvider router={router} />
      </div>
      <Footer />
    </React.StrictMode>
  );
}

export default App;
