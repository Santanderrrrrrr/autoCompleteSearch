import { actionTypes } from './action-types/action-types';



export const setUsers = (users) => {
    return {
        type: actionTypes.SET_USERS,
        payload: users,
    }
}