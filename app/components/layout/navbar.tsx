'use client';
import React, { useState, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '@/public/img/ser-logo_preview_rev_1.png';
import '@/app/styles/layout/navbar.scss';
import { usePathname } from 'next/navigation';
import Header from "@/app/components/layout/header";
import chat from "@/public/img/communication_4041949.png";
import notification from "@/public/img/bell_1827312.png";
import Conversations from "@/components/notification/listNotification"
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { getAuthCookie } from "@/utils/cookies"

const SideNav = () => {

    const pathname = usePathname();

    const client = useSelector((state: RootState) => state.mess.messages);
    const hasNewNotification = useSelector((state: RootState) => state.mess.status);
    const { isLoggedIn, isShowNotification, isShowChat } = getAuthCookie();



    return (

        <Navbar className="nav-container"  >
            <div className="logo item">
                <Nav.Link href="/"><img className="i-logo" src={logo.src} /></Nav.Link>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    className="toggle-icon"

                />
            </div>

            <Navbar.Collapse id="basic-navbar-nav" className="nav-menu">

                <div className="item menu">
                    <Nav.Link className={`menu-item  ${pathname === '/' ? 'active' : ''}`} href="/">Home</Nav.Link>


                    <NavDropdown
                        className={`menu-item ${pathname.startsWith('/rwanda') || pathname.startsWith('/uganda') ? 'active' : ''}`}
                        title="Category"
                        id="basic-nav-dropdown"
                    >
                        <NavDropdown className="submenu" title="Rwanda" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                className={`menu-item ${pathname === '/rwanda-safari' ? 'active' : ''}`}
                                href="/rwanda-safari"
                            >
                                Rwanda Safari
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={`menu-item ${pathname === '/rwanda-luxury' ? 'active' : ''}`}
                                href="/rwanda-luxury"
                            >
                                Rwanda Luxury
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={`menu-item ${pathname === '/rwanda-honey-moon' ? 'active' : ''}`}
                                href="/rwanda-honey-moon"
                            >
                                Rwanda Honey Moon
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown className="submenu" title="Uganda" id="basic-nav-dropdown">
                            <NavDropdown.Item
                                className={`menu-item ${pathname === '/uganda-safari' ? 'active' : ''}`}
                                href="/uganda-safari"
                            >
                                Uganda Safari
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={`menu-item ${pathname === '/uganda-luxury' ? 'active' : ''}`}
                                href="/uganda-luxury"
                            >
                                Uganda Luxury
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                className={`menu-item ${pathname === '/uganda-honey-moon' ? 'active' : ''}`}
                                href="/uganda-honey-moon"
                            >
                                Uganda Honey Moon
                            </NavDropdown.Item>
                        </NavDropdown>
                    </NavDropdown>
                    <Nav.Link className={`menu-item  ${pathname === '/about-us' ? 'active' : ''}`} href="/about-us">About us</Nav.Link>

                    <Nav.Link className={`menu-item  ${pathname === '/blog' ? 'active' : ''}`} href="/blog">Blog</Nav.Link>
                    <Nav.Link className={`menu-item  ${pathname === '/contact' ? 'active' : ''}`} href="/contact">Contacts</Nav.Link>

                </div>
                <div className="item menu end ">

                    {isLoggedIn && (
                        <Nav.Link className={`menu-item  ${pathname === '/chat' ? 'active' : ''}`} href="/chat">
                            <img className="icon" src={chat.src} />
                            {isShowChat && <div className="show-chat" style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'red',
                                borderRadius: '50%'
                            }}></div>}
                        </Nav.Link>


                    )}
                    {isLoggedIn && (
                        <NavDropdown className="chat-nav-dropdown menu-item " title={<div>
                            <img className="icon" src={notification.src} />
                            {isShowNotification && <div className="notification" style={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'red',
                                borderRadius: '50%',
                                marginLeft: '15px'
                            }}></div>}
                        </div>}>
                            <div className="notification" >
                                <Conversations />
                            </div>
                        </NavDropdown>
                    )}

                    <Suspense fallback={<div>Loading...</div>}>
                        <div className="menu-item"><Header /></div>

                    </Suspense>
                </div>

            </Navbar.Collapse>



        </Navbar >

    )
}

export default SideNav;