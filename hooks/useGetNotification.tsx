import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RootState } from '@/app/store/store';
import { useSelector } from 'react-redux';
import axiosInstance from "../app/api/axiosInstance"

const useGetNotifications = () => {
    const [loading, setLoading] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const currentUserID = useSelector((state: RootState) => state.user.id);
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axiosInstance.get("https://serenity-adventures-demo.onrender.com/api/v1/notificationclient");
                const data = await res.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                const filteredConversations = data.filter((userId: any) => userId !== currentUserID);
                setNotifications(filteredConversations);
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