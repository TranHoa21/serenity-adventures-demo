import React from 'react';
import { BiUserPin } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { getAuthCookie } from "@/utils/cookies"

const menuManage = [
    {
        id: 4,
        text: 'Thông tin tài khoản',
        path: '',
        icon: <BiUserPin />
    }
];

const MenuManage = () => {
    const userId = getAuthCookie();

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