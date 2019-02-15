import {
    createStore,
    applyMiddleware
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducer/reducers';

const enhancer = composeWithDevTools(
    applyMiddleware(
        thunkMiddleware,
    )
);

export default function configStore(initialState) {
    const store = createStore(reducer, initialState, enhancer);
    if (module.hot) {
        module.hot.accept('./reducer/reducers', () =>
            store.replaceReducer(require('./reducer/reducers').default)
        );
    }
    return store;
}