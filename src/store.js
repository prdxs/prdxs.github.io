import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['themeMode'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

function configureMiddleWare() {
  if (process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(thunk));
  }
  return applyMiddleware(thunk);
}

const store = createStore(persistedReducer, configureMiddleWare());

export const persistor = persistStore(store);

export default store;
