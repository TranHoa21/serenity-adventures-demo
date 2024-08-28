import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import currency from 'currency.js';

interface Tour {
    id: number;
    title: string;
    places_id: number;
    price: number;
}

interface StateManagedSelect {
    value: Tour;
    label: string;
}

interface Props {
    onPlacesChange: (selectedIds: number[]) => void;
    onPrices: (selectedPrices: number[]) => void;
    onTotalAmountChange: (totalAmount: currency) => void;
    onSelectePricesTitle: (selectedPricesTitle: string[]) => void;
    onNumTravelersChange: (numTravelers: number) => void;
    totalAmount: currency;
}

const MultiSelectWithDB: React.FC<Props> = ({ onPlacesChange, onPrices, onSelectePricesTitle, onNumTravelersChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<StateManagedSelect[]>([]);
    const [tourAddresses, setTourAddresses] = useState<Tour[]>([]);
    const [numTravelers, setNumTravelers] = useState(1);
    const [totalAmount, setTotalAmount] = useState(currency(0));

    useEffect(() => {
        const fetchTourAddresses = async () => {
            try {
                const response = await axios.get('sever-production-702f.up.railway.app/api/v1/tour');
                setTourAddresses(response.data);
            } catch (error) {
                console.error('Error fetching tour addresses:', error);
            }
        };

        fetchTourAddresses();
    }, []);


    const onTotalAmountChange = (totalAmount: currency): void => {
        setTotalAmount(totalAmount);
    };

    useEffect(() => {
        const totalPrice = selectedOptions.reduce((total, option) => {
            const price = currency(option.value.price).multiply(numTravelers);
            return total.add(price);
        }, currency(0));

        setTotalAmount(totalPrice);
        onTotalAmountChange(totalPrice);
    }, [selectedOptions, numTravelers]);




    const handleOptionChange = (newValue: OnChangeValue<StateManagedSelect, true>, actionMeta: ActionMeta<StateManagedSelect>) => {
        const newOptions = newValue as StateManagedSelect[];

        setSelectedOptions(newOptions);

        const selectedIds = newOptions.map((option) => option.value.id);
        onPlacesChange(selectedIds);

        const selectedPrices = newOptions.map((option) => option.value.price);
        onPrices(selectedPrices);

        const selectedPricesTitle = newOptions.map((option) => option.label);
        onSelectePricesTitle(selectedPricesTitle);
    };

    const handleNumTravelersChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const num = parseInt(event.target.value);
        setNumTravelers(num);
        onNumTravelersChange(num);
        const totalPrice = selectedOptions.reduce((total, option) => {
            const price = currency(option.value.price).multiply(num);
            return total.add(price);
        }, currency(0));
        onTotalAmountChange(totalPrice);
    };




    return (
        <div>
            <h6>Choose your tour addresses:</h6>
            <Select
                isMulti
                options={tourAddresses.map((tour) => ({ value: tour, label: tour.title }))}
                value={selectedOptions}
                onChange={handleOptionChange}
            />
            <p>Selected addresses: {selectedOptions.map((option) => option.value.id).join(', ')}</p>
            <p>Prices tour: {selectedOptions.map((option) => option.value.price).join(', ')}$</p>
            <h6>Quantity:</h6>
            <select className="traveler" value={numTravelers} onChange={handleNumTravelersChange}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <option key={num} value={num}>{num} traveler{num > 1 ? 's' : ''}</option>
                ))}
            </select>

            <h6 className="amount">The total amount: <em>{totalAmount.format()}</em></h6>


        </div>
    );
};

export default MultiSelectWithDB;
