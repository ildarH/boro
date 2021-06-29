import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

import { rootReducer } from './reducer';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['data']
}

const root = combineReducers({
  root: persistReducer(persistConfig, rootReducer)
})

export const store = createStore(root, applyMiddleware(thunk))

export const persistor = persistStore(store)
