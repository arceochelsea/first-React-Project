import React //{ useState, useEffect, use} 
from 'react';

import {BrowserRouter} from 'react-router-dom';

import AppRouter from './AppRouter';

import { ThemeProvider } from '../hooks/ThemeContext';

function App() {

// const [theme, setTheme] = useState(true);

// useEffect( () => {
//   console.log(theme);
// }, [])

  return (
    <BrowserRouter>
      {/* <button
      onClick={() => {
        setTheme( prevTheme => {return !prevTheme})
      }}
      >
        Change Theme
      </button> */}
      <ThemeProvider>
      <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

