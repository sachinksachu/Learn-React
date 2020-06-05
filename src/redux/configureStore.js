//import { Reducer, initialState } from './reducer'

//export const ConfigureStore = () => {
//    const store = createStore(
//        Reducer, // reducer
//        initialState, // our initialState
//    );

//    return store;
//}

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form'; //enable us to add the form state in store
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';

import { InitialFeedback } from './forms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({ //combining all reducers in store
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,

             ...createForms({ // create forms will create a reducer but takes care of the form.
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
