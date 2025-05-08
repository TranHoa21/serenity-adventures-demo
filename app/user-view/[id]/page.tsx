'use client'

import React, { useEffect, useState, ChangeEvent, FormEvent, useRef } from "react"
import axios from 'axios';
import { useParams } from 'next/navigation';
import "@/app/styles/user/userView.scss";
import edit from "@/public/img/edit_1159633.png";
import camera from "@/public/img/camera_685655.png";
import { MySelect } from "@/app/user-view/gender"
import { useDispatch } from "react-redux";
import * as yup from 'yup';
import Head from 'next/head';
import dotenv from 'dotenv';
dotenv.config();
interface User {
    id: number;
    avatar: string;
    name: string;
    email: string;
    phonenumber: string;
    age: string;
    gender: string;

}
const UserView = () => {
    const [user, setUser] = useState<User | null>(null);
    const { id } = useParams();
    const [avatar, setAvatar] = useState<File | null>(null); // Thay đổi kiểu dữ liệu của state image
    const [name, setName] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const inputFileRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const [updateUserMessage, setUpdateUserMessage] = useState('');
    const [noUpdateUserMessage, setNoUpdateUserMessage] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [validation, setValidation] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setPhoneNumber(user.phonenumber);
            setAge(user.age);
            setGender(user.gender);
        }
    }, [user]);
    const handleImageClick = () => {
        inputFileRef.current?.click();
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            dispatch({ type: "SET_SELECTED_IMAGE", payload: file });
            setAvatar(file); // Gán giá trị của selectedImage cho avatar
        }
    };
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };
    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };
    const handleGenderChange = (value: string) => {
        setGender(value);
    };
    const validationSchema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup
            .string()
            .matches(
                /^[\w.%+-]+@(gmail\.com|outlook\.com|hotmail\.com|yahoo\.com|protonmail\.com|mail\.ru|web\.de|usa\.com)$/,
                'Invalid email'
            )
            .required('Email is required'),
        phonenumber: yup
            .string()
            .matches(/^\d{7,11}$/g, 'Invalid phone number')
            .required('Phone number is required'),
        age: yup
            .number()
            .required('Age is required')
            .positive('Invalid age')
            .integer('Invalid age')
            .min(1, 'Age must be at least 1')
            .max(99, 'Age must be at most 99'),
        gender: yup.string().required('Gender is required'),
    });

    const fetchData = () => {
        if (id) {
            axios.get<User>(`${apiUrl}/user/${id}`)
                .then(response => {

                    setUser(response.data);
                    // Set loading to false after data is fetched
                })
                .catch(error => {
                    console.error('Lỗi khi lấy thông tin tour:', error);
                });
        } else {
            // Handle invalid id or show 404 page
        }
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (
            name === user?.name &&
            email === user?.email &&
            phonenumber === user?.phonenumber &&
            age === user?.age &&
            gender === user?.gender &&
            !avatar
        ) {
            setUpdateUserMessage('Không có thay đổi để cập nhật.');
            setAlertVariant('danger');
            setNoUpdateUserMessage(true);
            return;
        }
        try {
            await validationSchema.validate({
                name,
                email,
                phonenumber,
                age,
                gender,
            }, { abortEarly: false });

            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phonenumber', phonenumber);
            formData.append('age', age);
            formData.append('gender', gender);

            if (avatar) {
                formData.append('file', avatar);
            }

            const response = await axios.put(`${apiUrl}/user/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch({ type: "CLEAR_SELECTED_IMAGE" });
            setUpdateUserMessage('Update successful!');
            setAlertVariant('success');
            setShowAlert(true);
            fetchData();

            // Xóa nội dung form
            setName('');
            setEmail('');
            setPhoneNumber('');
            setAge('');
            setGender('');

        } catch (error) {
            console.error('Lỗi:', error);
            if (error instanceof yup.ValidationError) {
                // Trích xuất lỗi từ lỗi kiểm tra hợp lệ
                const validationErrors = error.inner.map((err) => err.message);
                console.error('Validation Errors:', validationErrors);

                // Hiển thị các lỗi kiểm tra hợp lệ
                setUpdateUserMessage('Lỗi xác nhận: ' + validationErrors.join(', '));
                setAlertVariant('danger');
                setValidation(true);
            } else {
                // Xử lý các lỗi khác
                setUpdateUserMessage('Xảy ra lỗi khi cập nhật người dùng.');
                setAlertVariant('danger');
                setNoUpdateUserMessage(true);
            }
        }
    };


    useEffect(() => {
        if (id) {
            axios.get<User>(`${apiUrl}/user/${id}`)
                .then(response => {

                    setUser(response.data);
                    setGender(response.data.gender);
                })
                .catch(error => {
                    console.error('Lỗi khi lấy thông tin tour:', error);
                });
        } else {
            // Handle invalid id or show 404 page
        }
    }, [id]);

    return (
        <>
            <Head>
                <title>Update Your Profile | Serenity Adventures</title>
                <meta name="description" content="Update your profile information on Serenity Adventures. Edit your name, email, phone number, age, gender, and avatar to keep your account details up-to-date." />
            </Head>
            <form className="user-container" onSubmit={handleSubmit}>
                {user ? (
                    <div className="row">
                        <div className="col-sm-8">
                            <div className="ava-header">
                                <div className="image">

                                    <img src={avatar ? URL.createObjectURL(avatar) : user?.avatar} alt={user?.name} className="avatar" />
                                    <img className="icon" src={camera.src} onClick={handleImageClick} />
                                    <input
                                        ref={inputFileRef}
                                        type="file"
                                        name="image"
                                        style={{ display: 'none' }}
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <div className="name">
                                    <h2><input
                                        type="text"
                                        name="name"
                                        defaultValue={user?.name || ''}
                                        onChange={handleNameChange}

                                    /></h2>

                                </div>
                            </div>
                            <div className="email">
                                <h5>Email:</h5>
                                <input
                                    type="text"
                                    name="email"
                                    defaultValue={user?.email || ''}
                                    onChange={handleEmailChange}

                                />
                            </div>
                            <div className="phone-number">
                                <h5>Phone number:</h5>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    defaultValue={user?.phonenumber || ''}
                                    onChange={handlePhoneNumberChange}

                                /></div>
                            <div className="age">
                                <h5>Age:</h5>
                                <input
                                    type="text"
                                    name="age"
                                    defaultValue={user?.age || ''}
                                    onChange={handleAgeChange}

                                />
                            </div>
                            <div className="gender">
                                <h5>Gender:</h5>

                                <MySelect
                                    value={gender}
                                    onChange={handleGenderChange}
                                />
                            </div>
                            <button className="btn" type="submit" onClick={handleSubmit}  >Save</button>

                        </div>

                        {showAlert && (
                            <div className="col-sm-2">
                                <div className="successful">
                                    <div className="Update"> Update successful </div>
                                    <button onClick={() => setShowAlert(false)}>ok</button>
                                </div>

                            </div>
                        )}
                        {noUpdateUserMessage && (
                            <div className="col-sm-3">
                                <div className="successful">
                                    <div className="Update"> There are no changes to update </div>
                                    <button onClick={() => setNoUpdateUserMessage(false)}>ok</button>
                                </div>

                            </div>
                        )}
                        {validation && (
                            <div className="col-sm-3">
                                <div className="successful">
                                    <div className="Update"> Validation error </div>
                                    <button onClick={() => setValidation(false)}>ok</button>
                                </div>

                            </div>
                        )}
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </form >
        </>
    )
}

export default UserView;
