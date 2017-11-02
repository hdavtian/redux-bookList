import { combineReducers } from 'redux';
import BooksReducer from './books-reducer';
import ActiveBookReducer from './active-book-reducer';

// We are telling the application how to create the state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
