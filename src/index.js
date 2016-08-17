import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import routes from './config/routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();
import './index.css';

const App = () => {
  return (
    <MuiThemeProvider>
      <Router routes={routes} history={hashHistory} />
    </MuiThemeProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
