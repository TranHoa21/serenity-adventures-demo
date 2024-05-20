'use client'
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { RootState } from '@/app/store/store';
import "@/app/styles/booking/booking.scss";
import MultiSelectWithDB from "@/app/tour/tour";
import currency from 'currency.js';
import Payment from "@/app/tour/pay"
import { useSelector, useDispatch } from 'react-redux';
import { saveBooking } from '@/app/store/actions/bookingActions';
import cancel from "@/public/img/delete_14025460.png"



const Booking = () => {
    const userId = useSelector((state: RootState) => state.user.id);
    const dispatch = useDispatch()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();
        if (!isValid) {
            return;
        }
        const bookingData = {
            tour_id: tour_id,
            name,
            email,
            phonenumber,
            start_day,
            price: totalAmount,
            tour: selectedTours,
            people: numTravelers,
            userid: userId
        };
        dispatch(saveBooking(bookingData));
        console.log("check redux booking >>>", bookingData)
        setShowPayment(true)
    };




    const [start_day, setStart_day] = useState('');
    const [tour_id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhone_number] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [totalAmount, setTotalAmount] = useState(currency(0));
    const [showPayment, setShowPayment] = useState(false);
    const [selectedTours, setSelectedTours] = useState<string[]>([]);
    const [peopel, setPeopel] = useState<number[]>([]);
    const [numTravelers, setNumTravelers] = useState(1);
    const [formValid, setFormValid] = useState(false);

    const validateForm = (): boolean => {
        if (email === '' || start_day === '' || name === '' || phonenumber === '') {
            return false;
        }
        setFormValid(true)
        return true;
    };

    const handlePlacesChange = (selectedIds: number[]) => {
        setId(selectedIds.join(','));
    };
    const handlePricesChange = (selectedPrices: number[]) => {
        setTotalAmount(currency(selectedPrices.join(',')));
    };
    const handleTotalAmountChange = (amount: currency) => {
        setTotalAmount(currency(amount));
    }
    const handlePricesTitleChange = (selectedPrices: string[]) => {
        setSelectedTours(selectedPrices);
    };
    const handleNumTravelersChange = (num: number) => {
        setNumTravelers(num);
        const totalPrice = totalAmount.divide(numTravelers).multiply(num);
        setTotalAmount(totalPrice);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        const nameValue = e.target.value.toString(); // Chuyển đổi thành chuỗi
        setName(nameValue);
        validateForm();
    };
    const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone_number(e.target.value);
        validateForm();
    };
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        validateForm();
    };
    const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
        const date = event.target.value;
        setStart_day(date);
        validateForm();
    };
    const clearForm = () => {
        setStart_day('');
        setName('');
        setEmail('');
        setPhone_number('');
        setNumTravelers(1);
        setTotalAmount(currency(0));
        setSelectedTours([]);
    };

    return (
        <>
            <form className="booking">
                <h2 className="title"> Book Now!</h2>
                <div className="row">
                    <div className="col-sm-6">
                        <label className="Select" htmlFor="datePicker">Select date:</label> <br />
                        <input
                            type="date"
                            id="datePicker"
                            name="datePicker"
                            value={start_day}
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="col-sm-6">
                        <p className="Select">Start date:</p>
                        <p className="Selected">{start_day}</p>
                    </div>
                </div>
                <div className="box">
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
                            type="name"
                            className="inputText"
                            value={name}
                            onChange={handleNameChange}
                            autoComplete="current-password"
                            placeholder=""
                            required
                            name="name"
                        />
                        <label>Name</label>
                    </div>
                    <div className="group">
                        <input
                            type="phone_number"
                            className="inputText"
                            value={phonenumber}
                            onChange={handlePhoneNumberChange}
                            autoComplete="current-password"
                            placeholder=""
                            required
                            name="phone_number"
                        />
                        <label>Phone_number</label>
                    </div>
                    <MultiSelectWithDB
                        onSelectePricesTitle={handlePricesTitleChange}
                        onPrices={handlePricesChange}
                        onPlacesChange={handlePlacesChange}
                        onTotalAmountChange={handleTotalAmountChange}
                        onNumTravelersChange={handleNumTravelersChange}
                        totalAmount={totalAmount.multiply(peopel[0])}
                    />

                </div>
                <button type="button" className="btn" onClick={handleSubmit} disabled={!formValid}>Pay</button>


            </form>

            {showPayment && (
                <div className='bookingFailure'>

                    <div className='payment'>
                        <button className='pay-btn' onClick={() => setShowPayment(false)}><img src={cancel.src} className="btn-icon" /></button>
                        <Payment onOkButtonClick={clearForm} onHidePayment={() => setShowPayment(false)} />

                    </div>
                </div>
            )}

        </>
    );
};

export default Booking;
