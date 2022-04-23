import { configureStore } from "@reduxjs/toolkit";
import bankReducer from './bankSlice';
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
   key: 'items',
   storage,
   whitelist: ['dataForm']
};

const middleware = (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
})


export const store = configureStore({
   reducer: {
      bank: persistReducer(persistConfig, bankReducer)
   },
   middleware,
});

export const persistor = persistStore(store)

// export default {store, persistor};