import React from 'react';
import { ImPencil2 } from 'react-icons/im';
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { BiUserPin } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';

const menuManage = [
    {
        id: 4,
        text: 'Thông tin tài khoản',
        path: '',
        icon: <BiUserPin />
    }
];

const MenuManage = () => {
    const user = useSelector((state: RootState) => state.user);
    const userId = user.id;

    // Update the path based on the userId
    menuManage[0].path = `/user-view/${userId}`;

    return (
        // Your JSX code here
        <div>
            xem chi tiết
        </div>
    );
}

export default MenuManage;