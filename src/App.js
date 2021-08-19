import React from 'react';
import './App.scss';
import MainPage from './pages/MainPage';
import FullReportPage from './pages/FullReportPage';
import AirQualityPage from './pages/AirQualityPage';
import DailyPage from './pages/DailyPage';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

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
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/report" exact>
            <FullReportPage />
          </Route>
          <Route path="/daily" exact>
            <DailyPage />
          </Route>
          <Route path="/airquality" exact>
            <AirQualityPage />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
