import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import ErrorPage from './pages/Error/Error';

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
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
