import React, { useEffect, useState } from 'react';
import anonAvatar from '@/public/img/user_1177568.png';
import axios from 'axios';
import '@/app/styles/layout/header.scss';
import { setUser } from '@/app/store/actions/userActions';
import { useDispatch } from 'react-redux';

interface User {
    avatar?: string;
    name: string;
    id: string | number;
}

interface UserProps {
    isLoggedIn: boolean;
    user: User | null;
}

const User: React.FC<UserProps> = ({ isLoggedIn, user }) => {
    const [storedUser, setStoredUser] = useState<User | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            const fetchUser = async () => {
                try {
                    const response = await axios.get(`https://serenity-adventures-demo.onrender.com/api/v1/user/${user.id}`);
                    const userData = response.data;

                    setStoredUser(userData);
                    dispatch(setUser({ ...user, id: user.id }));
                    localStorage.setItem('storedUser', JSON.stringify(userData));

                } catch (error) {
                    console.error('Lỗi khi lấy thông tin người dùng:', error);
                }
            };

            fetchUser();
        }
    }, [user, dispatch]);

    return (
        <div className='flex items-center gap-2'>
            {isLoggedIn ? (
                <div>
                    <img src={storedUser?.avatar || anonAvatar.src} alt='avatar' className='avatar' />
                </div>
            ) : (
                <span>Loading...</span>
            )}
        </div>
    );
};

export default User;
