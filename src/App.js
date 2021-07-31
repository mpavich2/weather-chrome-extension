import React from 'react';
import './App.scss';
import MainPage from './pages/MainPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6a6a6a',
    },
    secondary: {
      main: '#d45542',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={ theme }>
      <div className="app">
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
