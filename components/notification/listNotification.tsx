import useGetNotifications from "@/hooks/useGetNotification";
import Notifications from "./notification";
import "@/app/styles/components/listConversations.scss"
import { RootState } from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";

interface Notification {
    id: number;
    message: string;
    unread: number;
}

const Conversations = () => {
    const { loading, notifications } = useGetNotifications();


    return (
        <div className='conversation-container'>
            {notifications.map((notification: Notification, idx: number) => (
                <Notifications
                    key={notification.id}
                    conversation={notification}
                    lastIdx={idx === notifications.length - 1}
                />
            ))}

            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
};
export default Conversations;

