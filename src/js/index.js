import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import Home from '../components/app.js'



//const App = () => (
//  <div className="App">
//    <h1 className="App-Title">Hello Parcel x React</h1>
//  </div>
//);

ReactDOM.render(<Home />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
