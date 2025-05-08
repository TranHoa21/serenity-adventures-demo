"use client"

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import '@/app/styles/login/Login.scss';
import { Alert } from 'react-bootstrap';
import dotenv from 'dotenv';
dotenv.config();
import axiosInstance from "@/app/api/axiosInstance"
import { useRouter } from 'next/navigation';
import Head from 'next/head';
const Forgot = () => {
    const [email, setEmail] = useState('');
    const [forgot, setForgot] = useState(false);
    const [inputEmail, setinputEmail] = useState(true);
    const [resetCode, setResetCode] = useState('');
    const [newPassWord, setNewPassWord] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [signupMessage, setSignupMessage] = useState('');
    const [signupSuccess, setSignupSuccess] = useState(false);
    const router = useRouter();
    const [showAlert, setShowAlert] = useState(false);


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setResetCode(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    };
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post(`${apiUrl}/auth/send-verification-email`, {
                email,
            });
            const data = response.data
            setinputEmail(false)
            setForgot(true)

        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    const handleSubmitForgot = async (e: FormEvent) => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setSignupMessage('Mật khẩu xác nhận không khớp.');
            return;
        }
        try {
            const response = await axiosInstance.post(`${apiUrl}/auth/verify-password-reset-code`, {
                email, resetCode
            });
            const data = response.data
            console.log("check >>>", data)
            setinputEmail(false);
            setForgot(false)
            setNewPassWord(true)

        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    const handleSubmitUpdatePassword = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`${apiUrl}/auth/verify-password-reset-code`, {
                email, newPassword
            });
            setSignupSuccess(true)

        } catch (error) {
            console.error('Lỗi:', error);
        }
    };
    useEffect(() => {
        if (signupSuccess) {
            setTimeout(() => {
                router.push('/login');
            }, 7000);
        }
    }, [signupSuccess])


    return (
        <>
            <Head>
                <title>Forgot Password | Reset Your Account Password Easily</title>
                <meta name="description" content="Reset your password quickly and securely. Enter your email to receive a verification code, then create a new password to regain access to your account." />
            </Head>

            <div className="d1 w-100%">
                {inputEmail && (
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="form" id="form">
                            <div className="content">
                                <h1>Forgot Password</h1>
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
                                <button type="submit">Send</button>
                            </div>

                        </div>
                    </form>
                )}

                {forgot && (
                    <form className="container" onSubmit={handleSubmitForgot}>
                        <div className="form" id="form">
                            <div className="content">
                                <h1>Check your email</h1>
                                <div className="group">
                                    <input
                                        type="text"
                                        className="inputText"
                                        value={resetCode}
                                        onChange={handleVerificationCodeChange}
                                        autoComplete="email"
                                        placeholder=""
                                        required
                                    />
                                    <label>Auth Code</label>
                                </div>
                                <button type="submit">Send</button>
                            </div>

                        </div>
                    </form>
                )}

                {newPassWord && (
                    <form className="container" onSubmit={handleSubmitUpdatePassword}>
                        <div className="form" id="form">
                            <div className="content">
                                <h1>Forgot Password</h1>
                                <div className="group">
                                    <input
                                        type="password"
                                        className="inputText"
                                        value={newPassword}
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
                                <button type="submit">Send</button>
                            </div>

                        </div>
                        {signupMessage && (
                            <Alert variant={signupSuccess ? 'success' : 'danger'} id="liveAlertPlaceholder" className="mt-3">
                                {signupMessage}
                            </Alert>
                        )}
                    </form>
                )
                }

                {showAlert && (
                    <form className="container" onSubmit={handleSubmitForgot}>
                        <div className="form" id="form">
                            <div className="content">
                                <h3><em>Changed password successfully</em></h3>
                                <h6>Automatically redirects after 5 seconds</h6>
                            </div>

                        </div>
                    </form>
                )}
            </div>
        </>
    );
};

export default Forgot;


