import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMessages, setHasNewMessage } from "@/app/store/actions/messActions";
import { io } from "socket.io-client";
import { getAuthCookie } from "@/utils/cookies"
import Cookies from 'js-cookie';

interface Message {
	senderId: number;
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
	const { userId } = getAuthCookie();
	useEffect(() => {
		const socket = io("https://serenity-adventures-demo.onrender.com/", {
			query: { userId: userId }
		});

		const handleNewMessage = (newMessage: Message) => {
			newMessage.shouldShake = true;
			dispatch(setHasNewMessage(false));
			Cookies.set("isLoggedIn", true.toString())
			dispatch(setMessages([...messages, newMessage]));

			if (String(newMessage.senderId) !== String(userId)) {
				const conversationId = newMessage.senderId;

			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.disconnect();
		};
	}, [dispatch, messages, userId]);
};

export default useListenMessages;
