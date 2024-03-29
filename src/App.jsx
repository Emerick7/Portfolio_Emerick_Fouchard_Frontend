import React, { useEffect, useState, createContext } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import './App.css';
import { APP_PATHS } from './utils/constants';
import { useUser } from './lib/customHooks';
import Home from './pages/Home/Home';
import ErrorPage from './pages/Error/Error';
import Works from './pages/Works/Works';
import SignIn from './pages/SignIn/SignIn';
import AddWork from './pages/AddWork/AddWork';
import Resume from './pages/Resume/Resume';
import UpdateWork from './pages/UpdateWork/UpdateWork';
import Dashboard from './pages/Dashboard/Dashboard';
import Service from './pages/Service/Service';

export const ThemeContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    let gap = 12;
    if(cursorVariant === 'hover') {
      gap = 24;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX - gap);
      cursorY.set(e.clientY - gap);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorVariant]);

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

  //Toggle dark light mode

  const [ theme, setTheme ] = useState("dark");

  const [bgColor, changeBgColor] = useState("#35414d");
  const [txtColor, changeTxtColor] = useState("#CAD3C8");

  document.body.style.backgroundColor = bgColor;
  document.body.style.color = txtColor;

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
    changeBgColor((curr) => (curr === "#35414d" ? "#F8EFBA" : "#35414d"));
    changeTxtColor((curr) => (curr === "#CAD3C8" ? "#3B3B98" : "#CAD3C8"));
  };

  //Router

  const router = createBrowserRouter(
    [
      {
        path: APP_PATHS.HOME,
        element: <Home cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />,
        errorElement: <ErrorPage cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
      },
      {
        path: APP_PATHS.WORKS,
        element: <Works cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
      },
      {
        path: APP_PATHS.RESUME,
        element: <Resume cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
      },
      {
        path: APP_PATHS.SERVICES,
        element: <Service cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} toggleTheme={toggleTheme} theme={theme} />
      },
      {
        path: APP_PATHS.SIGN_IN,
        element: <SignIn
                    cursorVariant={cursorVariant} 
                    setCursorVariant={setCursorVariant} 
                    user={user}
                    setUser={setUser}
                    />
      },
      {
        path: APP_PATHS.ADD_WORK,
        element: <AddWork cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      },
      {
        path: `${APP_PATHS.UPDATE_WORK}/:workId`,
        element: <UpdateWork cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      },
      {
        path: APP_PATHS.DASHBOARD,
        element: <Dashboard 
                    cursorVariant={cursorVariant} 
                    setCursorVariant={setCursorVariant}
                    user={user} 
                    setUser={setUser}
                    />
      }
    ]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='App' id={theme}>
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
        </div>
    </ThemeContext.Provider>
  );
}

export default App;