import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import ErrorPage from './pages/Error/Error';
import Footer from './components/Footer/Footer';

const router = createBrowserRouter(
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'projects/:projectId',
    element: <Project />
  }
)

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
