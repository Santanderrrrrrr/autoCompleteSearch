import { actionTypes } from '../actions/action-types/action-types';

const initialState = {
    users:[],
};

export const usersReducer =(state = initialState, {type, payload})=>{
    switch(type) {
        case actionTypes.SET_USERS:
            return {...state, users: payload};

        
        
        default:
            return state;
    }

};