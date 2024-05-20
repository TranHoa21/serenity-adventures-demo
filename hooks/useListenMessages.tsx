import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMessages, updateUnreadCount, loadUnreadCounts, setHasNewMessage } from "@/app/store/actions/messActions";
import { io } from "socket.io-client";

interface Message {
	senderId: string;
	createdAt: Date;
	message: string;
	shouldShake: boolean;
	unread: boolean;
	unreadCount: number;
	client: boolean;
}

const useListenMessages = () => {
	const dispatch = useDispatch();
	const messages = useSelector((state: RootState) => state.mess.messages);
	const currentUserId = JSON.parse(localStorage.getItem("storedUser") ?? "{}").id;

	useEffect(() => {
		dispatch(loadUnreadCounts());
	}, [dispatch]);

	useEffect(() => {
		const socket = io("https://serenity-adventures-demo.onrender.com/", {
			query: { userId: currentUserId }
		});

		const handleNewMessage = (newMessage: Message) => {
			newMessage.shouldShake = true;
			dispatch(setHasNewMessage(false));

			dispatch(setMessages([...messages, newMessage]));

			if (newMessage.senderId !== currentUserId) {
				const conversationId = newMessage.senderId;
				const unreadCount = messages.filter(msg => msg.senderId === conversationId && msg.unread).length + 1;
				dispatch(updateUnreadCount(conversationId, unreadCount));
			}
		};

		socket.on("newMessage", handleNewMessage);

		const handleUpdateUnreadCount = ({ conversationId, unreadCount }: { conversationId: string, unreadCount: number }) => {
			dispatch(updateUnreadCount(conversationId, unreadCount));
		};

		socket.on("updateUnreadCount", handleUpdateUnreadCount);

		return () => {
			socket.disconnect();
		};
	}, [dispatch, messages, currentUserId]);
};

export default useListenMessages;
