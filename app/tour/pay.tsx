import React, { useState, useEffect, useRef, FormEvent } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import currency from 'currency.js';
import "@/app/styles/tour/payment.scss"
import { RootState } from '@/app/store/store';
import { useSelector } from 'react-redux';
import email from "@/public/img/email_11840146.png";
import day from "@/public/img/calendar_7614517.png"
import phone from "@/public/img/call_3687004.png"
import tour from "@/public/img/tour-guide_9682036.png";
import { getAuthCookie } from "@/utils/cookies";
import dotenv from 'dotenv';
dotenv.config();
interface PaymentProps {
    onOkButtonClick: () => void;
    onHidePayment: () => void;
}
export default function Payment({ onOkButtonClick, onHidePayment }: PaymentProps) {
    const booking = useSelector((state: RootState) => state.booking);
    const [totalAmount, setTotalAmount] = useState(currency(booking.price));
    const totalAmountRef = useRef(totalAmount);
    const [payment, setPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [bookingFailure, setBookingFailure] = useState(false);
    const [orderIdPayment, setOrderIdPayment] = useState("");
    const [paymentStatus, setPaymentStatus] = useState(true);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const orderIdPay = orderIdPayment;
    const userId = getAuthCookie().userId;


    const handleCreateOrder = async (): Promise<string> => {
        try {
            const orderId = await createOrder(totalAmountRef.current.value.toFixed(2));
            return orderId;
        } catch (error) {
            console.error('Error creating PayPal order:', error);
            throw new Error('Failed to create PayPal order');
        }
    };
    const apiUrl = https://sever-b483.onrender.com/api/v1;
    const createOrder = async (totalAmount: string) => {
        console.log("Total amount:", totalAmount);
        const amount = parseFloat(totalAmount.replace(/[$,]/g, '')).toFixed(2);
        console.log("check:", amount);

        try {
            const response = await axios.post(`${apiUrl}/payment/create-order`, { totalAmount: amount }); // Gửi giá trị totalAmount dưới dạng object
            const orderId = response.data.message;
            return orderId;
        } catch (error: any) {
            if (error.response && error.response.data) {
                console.log(error.response.data);
            } else {
                console.log(error);
            }
        }
    }



    const handleSubmit = (orderIdPay: string) => {
        const tourName = Array.isArray(booking.tour) && booking.tour.length > 0 ? booking.tour[0] : '';

        if (paymentSuccess || !paymentStatus) {
            axios.post(`${apiUrl}/booking`, {
                name: booking.name,
                email: booking.email,
                start_day: booking.start_day,
                phone_number: booking.phonenumber,
                tour_name: tourName,
                people: booking.people,
                payment_status: paymentStatus,
                total_amount: booking.price,
                userId: userId
            })
                .then(response => {
                    const order_id = response.data.booking.id;
                    console.log(response.data);
                    setBookingSuccess(true);
                    setPayment(true);
                    return axios.post(`${apiUrl}/notification`, {
                        userId: userId,
                        bookingId: order_id,
                        message: `The customer has just created a new order ${order_id}`
                    });


                })
                .catch(error => {
                    if (error.response && error.response.data) {
                        console.log(error.response.data);
                    } else {
                        console.log(error);
                    }
                    setBookingFailure(true);
                });
        } else {
            alert("Please complete payment or choose cash payment.");
        }
    };


    return (
        <div className='pay-container'>
            <h2 className='pay-title'>Payment</h2>
            <div className='pay-price'><span className='price'>${booking.price.toString()}</span></div>

            <div className="pay-lp">
                <div className='pay-email'>
                    <span className='email'>
                        <img src={email.src} className='pay-icon' /> {booking.email}</span>
                </div>
                <div className='pay-day'>
                    <span className='start-day'>
                        <img src={day.src} className='pay-icon' /> {booking.start_day}
                    </span>
                </div>
            </div>
            <div className="pay-lp">
                <div className='pay-tour'>
                    <span className='tour-name'>
                        <img src={tour.src} className='pay-icon' /> {booking.tour}</span>
                </div>
                <div className='pay-phone'>
                    <span className='phonenumber'>
                        <img src={phone.src} className='pay-icon' /> {booking.phonenumber}</span>
                </div>

            </div>
            {!bookingSuccess && !bookingFailure && (
                <div className='payment-methods'>
                    <p className="discounts">Instant discount of $10 when paying online</p>
                    {!paymentSuccess && (
                        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "" }}>
                            <PayPalButtons
                                createOrder={handleCreateOrder}
                                onApprove={async (data, actions) => {
                                    const orderID = data.orderID; try {
                                        await actions.order?.capture();
                                        const captureDetails = await actions.order?.get();
                                        if (captureDetails?.status === 'COMPLETED') {
                                            console.log('Payment successful!');
                                            setOrderIdPayment(orderID);
                                            setPaymentSuccess(true);
                                            setPayment(true);
                                        } else {
                                            console.log('Payment not completed:', captureDetails?.status);
                                        }
                                    } catch (error) {
                                        console.error('Error capturing order:', error);
                                    }
                                }}
                                onCancel={(data) => { console.log(" Cancelled:", data,); }}

                            />
                        </PayPalScriptProvider>
                    )}
                    {paymentSuccess && (
                        <div className="alert-success">Payment success!</div>
                    )}
                    <div className='cash-payment'>
                        <input type='checkbox' id='cashPayment' onChange={() => setPaymentStatus(!paymentStatus)} />
                        <label htmlFor='cashPayment'>Payment in Cash</label>
                    </div>
                    <button className='pay-confirm' onClick={() => handleSubmit(orderIdPay)}>Confirm</button>
                </div>
            )}
            {bookingSuccess && (
                <div className="bookingSuccess">
                    <div className="successful">
                        <div className="alert-success">Booking thành công!</div>
                        <button onClick={() => {
                            onOkButtonClick();
                            onHidePayment();
                            setBookingSuccess(false);
                        }}>OK</button>
                    </div>
                </div>
            )}
            {bookingFailure && (
                <div className="bookingFailure">
                    <div className="successful">
                        <div className="alert-failure">Booking thất bại!</div>
                        <button onClick={() => {
                            onOkButtonClick();
                            onHidePayment();
                            setBookingFailure(false);
                        }}>OK</button>
                    </div>
                </div>
            )}
        </div>
    )
}
