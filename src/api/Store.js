import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AppReducer from "./Reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

// khởi tạo rootReducer, kết hợp tất cả các reducer
const rootReducer = combineReducers({
    app: AppReducer,
});

// khởi tạo persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// khởi tạo store, quản lý state
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);