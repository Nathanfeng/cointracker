import formReducer from './components/Form/formReducer';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  formReducer,
  compose(applyMiddleware(thunkMiddleware))
);


export default store;
