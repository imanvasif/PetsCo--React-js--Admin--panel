import { createStore, applyMiddleware } from 'redux';
import rootReducers from './reducers/index';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
  };
  

const persistedReducer = persistReducer(persistConfig,rootReducers); 


export default function configureStore(){
    return createStore(persistedReducer,applyMiddleware(thunk));
}