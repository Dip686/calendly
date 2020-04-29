import React from 'react';
import ReactDOM from 'react-dom';
// App.css includes few basic styling for current App
import './resources/styles/App.css';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App';
// starting file incldues App, app is the main react component.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
