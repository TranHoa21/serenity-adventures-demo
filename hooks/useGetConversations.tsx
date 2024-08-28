import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "@/app/api/axiosInstance";

import { getAuthCookie } from "@/utils/cookies"

interface Conversation {
    id: string;
    name: string;
    unread: number;
    client: boolean

}

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const { userId } = getAuthCookie();
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axios.get("sever-production-702f.up.railway.app/api/v1/user");
                const data = await res.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                const filteredConversations = data.filter((user: any) => user.id.toString() !== userId);
                setConversations(filteredConversations);
            } catch (error: any) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations
