import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default (initialState) => {
    const finaleCreateStore = compose(
        applyMiddleware(thunk, promiseMiddleware()),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )(createStore);

    const store = finaleCreateStore(reducers, initialState);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers'); // eslint-disable-line
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};
