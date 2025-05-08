'use client'

import "@/app/styles/signup/signup.scss"
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import dotenv from 'dotenv';
dotenv.config();

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signupMessage, setSignupMessage] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const router = useRouter();


    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setSignupMessage('Mật khẩu xác nhận không khớp.');
            return;
        }
        if (!name || !email || !password || !confirmPassword) {
            setSignupMessage('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        if (!validateEmail(email)) {
            setSignupMessage('Email không hợp lệ.');
            return;
        }

        const userData = { name, email, password };
        console.log('Sending data to server:', userData);
        const apiUrl = https://sever-b483.onrender.com/api/v1;
            axios.post(`${apiUrl}/auth/signup`, { name, email, password })
                .then(response => {
                    const { success, message, user } = response.data;
                    console.log(success, message, user);
                    setSignupMessage(message);
                    setSignupSuccess(true);
                })

                .catch(error => {
                    if (error.response && error.response.data) {
                        setSignupMessage(error.response.data.message);
                        console.log(error.response.data);
                    } else {
                        setSignupMessage('Đã xảy ra lỗi. Vui lòng thử lại.');
                        console.log(error);
                    }
                });
    };

    useEffect(() => {
        if (signupSuccess) {
            setTimeout(() => {
                router.push('/login'); // Chuyển hướng sau 3 giây
            }, 3000);
        }
    }, [signupSuccess])
    const validateEmail = (email: string) => {
        // Kiểm tra định dạng email sử dụng regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <Head>
                <title>Sign Up for an Account | Join Our Community Today</title>
                <meta name="description" content="Create an account with us to access exclusive content, features, and updates. Sign up now with your name, email, and password to join our growing community!" />
            </Head>
            <div className="d1 w-100%">
                <form className="container">
                    <div className="form" id="form" >
                        <div className="content">
                            <h1>Sign Up</h1>
                            <div className="group">
                                <input
                                    type="text"
                                    className="inputText"
                                    value={name}
                                    onChange={handleNameChange}
                                    autoComplete="name"
                                    placeholder=""
                                    required
                                />
                                <label>Name</label>
                            </div>
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
                                    autoComplete="new-password"
                                    placeholder=""
                                    required
                                />
                                <label>Password</label>
                            </div>
                            <div className="group">
                                <input
                                    type="password"
                                    className="inputText"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    autoComplete="new-password"
                                    placeholder=""
                                    required
                                />
                                <label>Confirm Password</label>
                            </div>
                            <button type="button" onClick={handleSubmit}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                    {signupMessage && (
                        <Alert variant={signupSuccess ? 'success' : 'danger'} id="liveAlertPlaceholder" className="mt-3">
                            {signupMessage}
                        </Alert>
                    )}
                </form>
            </div>
        </>
    );
};

export default Signup;

