// reducer.js
import { UserState } from "@/app/store/type/type"
interface Action {
    type: string;
    payload: any;
}
const initialState: UserState = {
    name: '',
    id: 0,
    email: '',
    avatar: '',
    role: false
};

const userReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                avatar: action.payload.avatar,
                role: action.payload.role,

            };
        default:
            return state;
    }
};

export default userReducer;