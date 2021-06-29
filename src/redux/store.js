import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducer';

export const store = createStore(combineReducers({root: rootReducer}), applyMiddleware(thunk))
