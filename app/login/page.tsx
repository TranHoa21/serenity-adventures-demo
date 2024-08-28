"use client"

import React, { ChangeEvent, FormEvent, useState, useContext } from 'react';
import axios from 'axios';
import '@/app/styles/login/Login.scss';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/app/store/actions/authActions';
import { setUser } from '@/app/store/actions/userActions';
import Link from "next/link";
import axiosInstance from "@/app/api/axiosInstance"
import Cookies from 'js-cookie';
import Head from 'next/head';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const dispatch = useDispatch();


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('sever-production-702f.up.railway.app/api/v1/auth/login', {
                email,
                password,
            });
            console.log("check data ", response.data)
            Cookies.set("isLoggedIn", true.toString())
            const user = response.data.user;
            const userId = user.id
            Cookies.set("userId", userId)
            const { id, name, role } = user;
            dispatch(setUser(user));

            if (role === false) {
                dispatch(loginSuccess(response.data));
                dispatch(setUser(user));
                router.push('/');
            } else {
                dispatch(loginSuccess(response.data));
                dispatch(setUser(user));
                router.push('/');
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    return (
        <>
            <Head>
                <title>Log In | Secure Access to Your Account</title>
                <meta name="description" content="Log in to your account securely to access personalized features and manage your settings. Enter your email and password to get started. Forgot your password? Click here to reset it." />
            </Head>
            <div className="d1 w-100%">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="form" id="form">
                        <div className="content">
                            <h1>Log In</h1>
                            <div className="group">
                                <input
                                    type="text"
                                    className="inputText"
                                    value={email}
                                    onChange={handleEmailChange}
                                    autoComplete="email"
                                    placeholder=""
                                    required
                                />
                                <label>Email</label>
                            </div>
                            <div className="group">
                                <input
                                    type="password"
                                    className="inputText"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    autoComplete="current-password"
                                    placeholder=""
                                    required
                                />
                                <label>Password</label>
                            </div>
                            <div className="group">
                                <Link href="/forgot-password">Forgot password?</Link>
                            </div>
                            <button type="submit">LogIn</button>
                            <Link className="signup" href="/signup">Signup</Link>

                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
