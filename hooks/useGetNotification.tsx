import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getAuthCookie } from "@/utils/cookies"
import axiosInstance from "../app/api/axiosInstance"
import Cookies from 'js-cookie';

const useGetNotifications = () => {
    const [loading, setLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const userId = getAuthCookie().userId;
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axiosInstance.get("https://serenity-adventures-demo.onrender.com/api/v1/notificationclient");
                const data = await res.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                const filteredConversations = data.filter((userId: any) => userId !== userId);
                setNotifications(filteredConversations);
                Cookies.set("isShowNotification", true.toString())

            } catch (error: any) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, notifications };
}

export default useGetNotifications