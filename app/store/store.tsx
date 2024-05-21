import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from '@/app/store/reducers/authReducer';
import userReducer from '@/app/store/reducers/userReducer';
import postReducer from '@/app/store/reducers/postReducer';
import bookingReducer from '@/app/store/reducers/bookingReducer';
import { MessState, SocketState, UserState } from "./type/type";
import socketReducer from './reducers/socketReducers';
import messReducer from './reducers/messReducer';
import authTokenReducer from "./reducers/authTokenReducer"

export interface BookingState {
    name: string;
    email: string;
    phonenumber: string;
    tour_id: string;
    price: string;
    start_day: string;
    tour: string;
    people: string;

}
export interface PostState {
    posts: Post[],
    like: string;
    id: string;
    comment: string;
}
export interface TokenState {
    userId: number,
    token: string;
}

export interface Post {
    id: string;
    like: boolean;
    comments: string[];
}


export interface AuthState {
    isLoggedIn: boolean;
    token: string;
    error: string | null;
}

export interface RootState {
    auth: AuthState;
    user: UserState;
    post: PostState;
    booking: BookingState;
    mess: MessState;
    socket: SocketState;
    token: TokenState;
}


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
    booking: bookingReducer,
    socket: socketReducer,
    mess: messReducer,
    token: authTokenReducer
});


const store = createStore(rootReducer);

export default store 
