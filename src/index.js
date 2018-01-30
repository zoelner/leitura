import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './Reducers';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
