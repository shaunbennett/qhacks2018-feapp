import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const App = (
  <BrowserRouter>
    <Provider store={store}>{routes}</Provider>
  </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));
registerServiceWorker();
