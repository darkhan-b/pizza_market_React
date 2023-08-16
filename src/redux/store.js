import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk'

const composEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
      composEnhancers(applyMiddleware(thunk)))


window.store = store;

export default store;