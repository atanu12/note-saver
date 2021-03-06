import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGESTER_FAIL, USER_REGESTER_REQUEST, USER_REGESTER_SUCCESS } from "../constants/userConstance";

export const userLoginReducer = (state={},action)=>{
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true};
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload};
        case USER_LOGOUT:
            return {};
        default:
            return {state}
    }
}

export const userRegesterReducer = (state={}, action) =>{
    switch (action.type) {
        case USER_REGESTER_REQUEST:
            return {loading:true};
        case USER_REGESTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_REGESTER_FAIL:
            return { loading: false, error: action.payload};
        default:
            return {state};
    }
}