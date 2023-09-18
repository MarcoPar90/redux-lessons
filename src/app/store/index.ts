import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerCounter from './counterStoreSlice/CounterStore';
import userReducer from "./userStoreSlice/UserStore";
import postReducer from './postsStoreSclice/PostStore';
import { oldCounterReducer } from "./normalCounter/counter.reducer";

const rootReducer = combineReducers({
    counter: reducerCounter,
    user: userReducer,
    posts: postReducer,
    oldCounter: oldCounterReducer
});

export const store = configureStore({reducer: rootReducer});

export type RootReducer = ReturnType<typeof rootReducer>;