import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import HelloWorld from './components/hello-world';
import BookList from './containers/book-list';
import ActiveBook from './containers/active-Book';
import rootReducer from './reducers/index';

// Styles -----------------------------------
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.scss';

const App = () => {
  return(
    <div>
      <BookList />
      <ActiveBook />
    </div>
  )
}

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('react-container')
);
