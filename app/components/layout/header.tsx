// Header.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Button from '@/app/components/layout/button';
import User from '@/app/components/layout/user';
import icons from '@/app/components/layout/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useRouter } from 'next/navigation';
import menuManage from '@/app/components/layout/menuManage';
import '@/app/styles/layout/header.scss';
import { RootState } from '@/app/store/store';
import { loginSuccess, logout } from '@/app/store/actions/authActions';
const { AiOutlinePlusCircle, AiOutlineLogout, BsChevronDown } = icons;
import { setUser } from "@/app/store/actions/userActions"
import { NavDropdown } from 'react-bootstrap';

const Header: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const headerRef = useRef<HTMLDivElement>(null);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const userId = user.id;
    const [showAdminView, setShowAdminView] = useState(false);
    useEffect(() => {
        headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [searchParams]);

    const goLogin = useCallback(() => {
        router.push('/login');
    }, [router]);

    useEffect(() => {
        if (isLoggedIn) {
            setShowAdminView(user.role === true);
        }
    }, [isLoggedIn, user.role]);

    const handleLogout = useCallback(() => {
        dispatch(logout());
        setIsShowMenu(false);
        router.push('/');
        window.location.reload();
    }, [dispatch, router]);

    return (
        <div ref={headerRef} className='w-3/5'>
            <div className='w-full flex items-center justify-between'>
                {!isLoggedIn && (
                    <div className='log'>
                        <Button
                            text={'login'}
                            textColor='text-white'
                            bgColor='bg-[#3961fb]'
                            onClick={goLogin} // Sử dụng hàm gọi lại goLogin
                        />
                    </div>

                )}
                {isLoggedIn && (


                    <NavDropdown className="second-nav-dropdown" title={<User isLoggedIn={isLoggedIn} user={user} />} >
                        <NavDropdown.Item href={`/user-view/${userId}`}>
                            xem chi tiết
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        {showAdminView && (
                            <NavDropdown.Item>
                                Admin View
                            </NavDropdown.Item>
                        )}
                        <NavDropdown.Item onClick={handleLogout}>
                            <AiOutlineLogout />
                            Đăng xuất
                        </NavDropdown.Item>

                    </NavDropdown>
                )}
            </div>
        </div>
    );
}

export default Header;
