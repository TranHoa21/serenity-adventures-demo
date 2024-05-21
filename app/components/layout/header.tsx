// Header.tsx

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from '@/app/components/layout/button';
import User from '@/app/components/layout/user';
import icons from '@/app/components/layout/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useRouter } from 'next/navigation';
import '@/app/styles/layout/header.scss';
import { RootState } from '@/app/store/store';
const { AiOutlineLogout } = icons;
import { NavDropdown } from 'react-bootstrap';
import { getAuthCookie, removeAuthCookie } from "@/utils/cookies"

const Header: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const headerRef = useRef<HTMLDivElement>(null);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const { userId, isLoggedIn } = getAuthCookie();
    const [showAdminView, setShowAdminView] = useState(false);
    useEffect(() => {
        headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, [searchParams]);

    const goLogin = useCallback(() => {
        router.push('/login');
    }, [router]);

    useEffect(() => {
        console.log("check >>>", userId)
        if (isLoggedIn) {
            setShowAdminView(user.role === true);
        }
    }, [isLoggedIn, user.role]);

    const handleLogout = useCallback(() => {
        removeAuthCookie()
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


                    <NavDropdown className="second-nav-dropdown" title={<User isLoggedIn={isLoggedIn} user={user} userId={userId} />} >
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
