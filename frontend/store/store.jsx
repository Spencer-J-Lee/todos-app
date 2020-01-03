import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => {
  let store;
  if (window.localStorage.length > 0) {
    const preloadedState = JSON.parse(window.localStorage.getItem('state'));
    store = createStore(rootReducer, preloadedState);
  } else {
    store = createStore(rootReducer);
  }

  store.subscribe(() => {
    window.localStorage.setItem('state', JSON.stringify(store.getState()));
  });

  return store;
};

export default configureStore;
