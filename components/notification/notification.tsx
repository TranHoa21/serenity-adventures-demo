import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setHasNewNotification, selectConversation } from "@/app/store/actions/messActions";
import "@/app/styles/components/notification.scss"
import { io } from "socket.io-client";
import axios from "axios";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const socket = io("https://serenity-adventures-demo.onrender.com/");

const Notifications = ({ notification, lastIdx }: any) => {
    const dispatch = useDispatch();
    const { selectedConversation } = useSelector((state: RootState) => state.mess);
    const isSelected = selectedConversation?.id === notification.id;
    const onlineUsers = useSelector((state: RootState) => state.socket.onlineUsers);
    const isOnline = onlineUsers.includes(notification.id);
    const messageId = notification.id


    const handleSelectConversation = async () => {
        try {
            axios.put(`https://serenity-adventures-demo.onrender.com/api/v1/notificationclient/${messageId}`, { status: true })
                .then(response => {
                    dispatch(setHasNewNotification(false));
                })
                .catch(error => {
                    console.error('Failed to fetch booking details:', error);
                });
        } catch (error) {
            console.error('Failed to fetch booking details:', error);

        }

    };
    return (
        <>
            <div
                className={`conversation ${isSelected ? "bg" : ""}`}
                onClick={handleSelectConversation}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='user-A'>
                        <img className="img-av-user" src={notification.message} alt='user avatar' />
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider' />}
        </>
    );
};

export default Notifications;

