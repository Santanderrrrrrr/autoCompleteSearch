import {combineReducers} from 'redux';

import {usersReducer} from "./userReducer";

const reducers = combineReducers({
    allUsers: usersReducer,
});

export default reducers;