import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import ErrorPage from './pages/Error/Error';

function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const variants = {
    default: {
      height: 24,
      width: 24
    },
    hover: {
      height: 48,
      width: 48,
    }
  }

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />,
        errorElement: <ErrorPage cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      },
      {
        path: 'projects/:projectId',
        element: <Project cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      }
    ]
  );

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
        <motion.div
          className='cursor'
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          variants={variants}
          animate={cursorVariant}
        />
    </React.StrictMode>
  );
}

export default App;
