import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";
import "@/app/styles/components/listConversations.scss"
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";

interface Conversation {
    id: string;
    name: string;
    unread: number;
    client: any

}

const Conversations = () => {
    const { loading, conversations } = useGetConversations();
    return (
        <div className='conversation-container'>
            {conversations.map((conversation: Conversation, idx: number) => (
                <Conversation
                    key={conversation.id}
                    conversation={conversation}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};
export default Conversations;

