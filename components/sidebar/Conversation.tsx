import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setHasNewMessage, selectConversation } from "@/app/store/actions/messActions";
import "@/app/styles/components/conversation.scss";
import axios from "axios";
import { removeNotification } from "@/utils/cookies"
require('dotenv').config();

const Conversation = ({ conversation, lastIdx }: any) => {
    const dispatch = useDispatch();
    const { selectedConversation } = useSelector((state: RootState) => state.mess);
    const isSelected = selectedConversation?.id === conversation.id;
    const onlineUsers = useSelector((state: RootState) => state.socket.onlineUsers);
    const isOnline = onlineUsers.includes(conversation.id);
    const client = useSelector((state: RootState) => state.mess.messages);
    const receiver = useSelector((state: RootState) => state.mess.messages);
    const messageId = conversation.id
    const handleSelectConversation = async () => {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        try {
            console.log("check client >>", client)
            dispatch(selectConversation(conversation));
            dispatch(setHasNewMessage(true));
            removeNotification()
            axios.put(`${apiUrl}/messages/${messageId}`, { client: true })

        } catch (error) {
            console.error('Error updating message status:', error);

        }
    };
    const isShow = !client === false

    const shouldShowBadge = receiver === conversation.id;


    return (
        <>
            <div
                className={`conversation ${isSelected ? "bg" : ""}`}
                onClick={handleSelectConversation}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='user-A'>
                        <img className="img-av-user" src={conversation.avatar} alt='user avatar' />
                    </div>
                </div>

                <div className='side-mess'>
                    <div className='between'>
                        <p className='conver-name'>{conversation.name}</p>
                        {shouldShowBadge && isShow && (
                            <span className='unread-badge'>...</span>
                        )}
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider' />}
        </>
    );
};

export default Conversation;
