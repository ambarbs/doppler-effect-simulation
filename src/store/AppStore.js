import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';
// import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
    actionType,
} from './constants';

const appReducer = (state = {

    velocity: '0',
}, action) => {
    const {
        VELOCITY,
    } = actionType;

    switch (action.type) {
        default:
            break;
        case VELOCITY:
            state = {
                ...state,
                velocity: action.payload,
            };
            break;
    }
    return state;
};

const middlewares = [
    // createLogger(),
    thunk
];

export const store = createStore(
    combineReducers({appReducer}),
    {},
    composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    )
);