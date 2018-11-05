import React, { Component } from 'react';
import storage from 'redux-persist/lib/storage';
import { Root } from 'native-base';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';

import reducers from './src/reducers';
import Router from './src/Router';

const config = {
    key: 'root',
    storage,
};

const reducer = persistCombineReducers(config, reducers);

function configureStore() {
    const store = createStore(
        reducer,
        undefined,
        composeWithDevTools(applyMiddleware(ReduxThunk))
    );
    const persistor = persistStore(store);

    return { persistor, store };
}
const { persistor, store } = configureStore();

export default class App extends Component {

    render() {
        return (
            <Root>
                <Provider store={store} >
                    <PersistGate
                        persistor={persistor}
                    >
                        <Router />
                    </PersistGate>
                </Provider>
            </Root>
        );
    }
}

