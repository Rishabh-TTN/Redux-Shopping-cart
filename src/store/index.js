import {reducer} from "../reducers/CombinedReducer";
import {applyMiddleware,createStore,compose} from 'redux';
import logger from 'redux-logger';

// const thunkMW = store => next => action => {
//     if (typeof action === 'function') {
//         return action(store.dispatch);
//     }
//     return next(action);
// };
const middlewares = applyMiddleware(logger);
const _compose= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  : compose;
const store = createStore(reducer, _compose(middlewares));

export default store;
