import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filter/filterSlice";
import { todoReducer } from "./todo/todoSlice";

const rootReducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer
});

const persistConfig = {
    key: 'root',
    storage,
    blacklist: 'filter'
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })

});


export const persistor = persistStore(store);