import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import App from '../components/app.js'


ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
