import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMessages, setHasNewMessage } from "@/app/store/actions/messActions";
import { io } from "socket.io-client";

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
	const currentUserId = useSelector((state: RootState) => state.user.id);


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

			}
		};

		socket.on("newMessage", handleNewMessage);

		return () => {
			socket.disconnect();
		};
	}, [dispatch, messages, currentUserId]);
};

export default useListenMessages;
