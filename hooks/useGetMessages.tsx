
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { setMessages, setHasNewMessage } from "@/app/store/actions/messActions";
import toast from "react-hot-toast";
import axiosInstance from '@/app/api/axiosInstance';
import { getAuthCookie } from "@/utils/cookies"
import dotenv from 'dotenv';
dotenv.config();
const useGetMessages = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const senderId = getAuthCookie().userId;
    const selectedConversation = useSelector((state: RootState) => state.mess.selectedConversation);
    const apiUrl = https://sever-b483.onrender.com/api/v1;
        useEffect(() => {
            const getMessages = async () => {
                setLoading(true);
                try {
                    if (!selectedConversation?.id) return;
                    const res = await axiosInstance.get(`${apiUrl}/messages/${selectedConversation.id}`, {
                        params: {
                            senderId: senderId
                        }
                    });
                    const data = await res.data;
                    const client = data.length > 0 ? data[0].client : false;
                    console.log(" check true or false", client)
                    if (data.error) throw new Error(data.error);
                    dispatch(setMessages(data));
                    dispatch(setHasNewMessage(client));

                } catch (error: any) {
                    toast.error(error.message);
                } finally {
                    setLoading(false);
                }
            };

            if (selectedConversation?.id) {
                getMessages();
            }
        }, [dispatch, selectedConversation?.id]);

    return { loading };
}
export default useGetMessages