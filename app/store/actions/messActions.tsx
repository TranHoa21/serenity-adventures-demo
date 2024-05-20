// action.js
import { SELECT_CONVERSATION, SET_MESSAGES, TOGGLE_IS_SHOW_CHAT, TOGGLE_IS_SHOW_SIDEBAR, SET_NOTIFICATION } from '../type/type';

type ConversationInfo = { id: string; name: string; avatar: string };

export const toggleIsShowChat = (isShowChat: boolean) => ({
    type: TOGGLE_IS_SHOW_CHAT,
    payload: isShowChat,
});

export const toggleIsShowSideBar = (isShowSideBar: boolean) => ({
    type: TOGGLE_IS_SHOW_SIDEBAR,
    payload: isShowSideBar,
});


export const selectConversation = (conversationInfo: any) => ({
    type: SELECT_CONVERSATION,
    payload: conversationInfo,
});

export const setMessages = (messages: any) => ({
    type: SET_MESSAGES,
    payload: messages,
});







export const setNotification = (notifications: any) => ({
    type: SET_NOTIFICATION,
    payload: notifications,
});





export const setHasNewMessage = (client: any) => ({
    type: 'SET_HAS_NEW_MESSAGE',
    payload: client,
});

export const setHasNewNotification = (status: any) => ({
    type: 'SET_HAS_NEW_NOTIFICATION',
    payload: status,
});