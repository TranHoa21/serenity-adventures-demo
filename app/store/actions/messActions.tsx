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


export const updateUnreadCount = (conversationId: any, count: any) => {
    const unreadCounts = JSON.parse(localStorage.getItem('unreadCounts') || '{}');
    unreadCounts[conversationId] = count;
    localStorage.setItem('unreadCounts', JSON.stringify(unreadCounts));

    return {
        type: 'UPDATE_UNREAD_COUNT',
        payload: { conversationId, count },
    };
};

export const loadUnreadCounts = () => {
    const unreadCounts = JSON.parse(localStorage.getItem('unreadCounts') || '{}');
    return {
        type: 'LOAD_UNREAD_COUNTS',
        payload: unreadCounts,
    };
};


export const setNotification = (notifications: any) => ({
    type: SET_NOTIFICATION,
    payload: notifications,
});

export const updateUnreadCountNotification = (notificationId: any, conversationId: any, count: any) => {
    const unreadCounts = JSON.parse(localStorage.getItem('unreadCountsNotification') || '{}');
    unreadCounts[conversationId] = {
        notificationId,
        count
    };
    localStorage.setItem('unreadCountsNotification', JSON.stringify(unreadCounts));

    return {
        type: 'UPDATE_UNREAD_COUNT_NOTIFICATION',
        payload: { notificationId, conversationId, count },
    };
};

export const loadUnreadCountNotification = () => {
    const unreadCounts = JSON.parse(localStorage.getItem('unreadCountsNotification') || '{}');
    return {
        type: 'LOAD_UNREAD_COUNTS_NOTIFICATION',
        payload: unreadCounts,
    };
};

export const setHasNewMessage = (client: any) => ({
    type: 'SET_HAS_NEW_MESSAGE',
    payload: client,
});

export const setHasNewNotification = (status: any) => ({
    type: 'SET_HAS_NEW_NOTIFICATION',
    payload: status,
});