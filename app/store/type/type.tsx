export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export type ImageState = Blob | MediaSource;
export const SELECT_CONVERSATION = 'SELECT_CONVERSATION';
export const SET_MESSAGES = 'SET_MESSAGES';
export const TOGGLE_IS_SHOW_CHAT = 'TOGGLE_IS_SHOW_CHAT';
export const TOGGLE_IS_SHOW_SIDEBAR = "TOGGLE_IS_SHOW_SIDEBAR";
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export interface Conversations {
    id: string;
    name: string;
    avatar: string;

}
export interface UserState {
    name: string;
    id: string;
    email: string;
    avatar: string
}
export interface User {
    name: string;
    id: string;
    email: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    token: string;
    error: string | null;
}

export interface MessState {
    selectedConversation: {
        id: string;
        name: string;
        avatar: string;
    } | null;
    messages: {
        receiveId: number;
        senderId: string;
        createdAt: Date;
        message: string;
        shouldShake: any;
        unread: boolean;
        unreadCount: number;
        id: number;
        client: boolean;

    }[];
    isShowChat: boolean;
    isShowSideBar: boolean;
    unreadCounts: any
    notification: {
        senderId: string;
        createdAt: Date;
        notification: string;
        unread: boolean;
        unreadCount: number;
        notificationId: string;
    }[];
    status: boolean,
    hasNewMessage: {
        recerverId: string;
        senderId: Date;
        client: string;
    }[];


}




export interface SocketState {
    socket: any; // 
    onlineUsers: any[];
}

