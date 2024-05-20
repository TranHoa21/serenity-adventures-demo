import Conversations from "./Conversations";
import "@/app/styles/components/sidebar.scss";

const Sidebar = () => {


    return (
        <div className='sidemess-container'>
            <div className='divider'></div>
            <Conversations />
        </div>
    );
};
export default Sidebar;