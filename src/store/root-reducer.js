import { combineReducers } from "redux";
import { userReducer } from './user/user-reducer/userSlice'  

export const rootReducer = combineReducers({
    user: userReducer,
});