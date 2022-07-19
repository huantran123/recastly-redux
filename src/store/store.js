import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunk)
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)
const store = createStore(rootReducer, {videoList: [], currentVideo: {}}, applyMiddleware(thunk));

export default store;