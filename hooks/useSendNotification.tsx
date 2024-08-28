import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMessages } from "@/app/store/actions/messActions";
import axiosInstance from '@/app/api/axiosInstance'
import { io, Socket } from "socket.io-client";



interface Notification {
    sender: number;
    timestamp: number;
    notification: string;
    unread: boolean;
    content: string;
    unreadCount: number;
    notificationId: string;
}

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const socketInstance = io("https://serenity-adventures-demo.onrender.com");

        socketInstance.on("connect", () => {
            console.log("Connected to server");
        });

        socketInstance.on("disconnect", () => {
            console.log("Disconnected from server");
        });

        setSocket(socketInstance);

        return () => {
            socketInstance.disconnect();
        };
    }, []);

    const sendMessage = async (notification: Notification) => {
        setLoading(true);
        try {
            const res = await axiosInstance.post(`sever-production-702f.up.railway.app/api/v1/user`);
            const data = await res.data.filter((user: any) => user.role === true);
            const receiverId = data.id
            if (data.error) throw new Error(data.error);

            if (socket) {
                const newNotification = {
                    receiverId: receiverId,
                    senderId: notification.sender,
                    notification: notification.notification,
                };
                socket.emit("newNotification", newNotification);
            }


        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
}

export default useSendMessage