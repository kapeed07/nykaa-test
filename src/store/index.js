import {
  applyMiddleware,
  createStore
} from 'redux';
import middleware from '../middleware';
import rootReducers from '../reducer';

const appliedMiddleware = applyMiddleware(middleware);

const store = createStore(rootReducers, appliedMiddleware);

export default store;