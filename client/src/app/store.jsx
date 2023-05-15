import {combineReducers,configureStore} from '@reduxjs/toolkit'
import UserReducer from '../Slice/UserSlice';

const reducer = combineReducers({
    userInfo:UserReducer,
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});