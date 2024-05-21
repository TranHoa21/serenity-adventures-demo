export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';



export interface AuthState {
    isLoggedIn: boolean;
    token: string;
    error: string;
}

export interface Action {
    type: string;
    payload?: any;
}


const initialState: AuthState = {
    isLoggedIn: false,
    token: '',
    error: ""
};

const authReducer = (state = initialState, action: Action): AuthState => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload.token,

            };
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: '',
            };
        default: {
            return state as AuthState;
        }
    }
};

export default authReducer;
