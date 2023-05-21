import {combineReducers,configureStore} from '@reduxjs/toolkit'
import UserReducer from '../Slice/UserSlice';
import AdminReducer from '../Slice/AdminSlice';

const reducer = combineReducers({
    userInfo:UserReducer,
    adminInfo:AdminReducer
});

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});