import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { rootReducer } from './reducer';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['data', 'closedCards']
}

const root = combineReducers({
  root: persistReducer(persistConfig, rootReducer)
})

export const store = createStore(root, applyMiddleware(thunk))

export const persistor = persistStore(store)
