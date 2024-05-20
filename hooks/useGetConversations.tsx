import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "@/app/api/axiosInstance";

interface Conversation {
    id: string;
    name: string;
    unread: number;
    client: boolean

}

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const currentUserID = JSON.parse(localStorage.getItem("storedUser") ?? "{}").id;
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axios.get("https://serenity-adventures-demo.onrender.com/api/v1/user");
                const data = await res.data;
                if (data.error) {
                    throw new Error(data.error);
                }
                const filteredConversations = data.filter((user: any) => user.id !== currentUserID);
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
