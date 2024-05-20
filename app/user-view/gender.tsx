import React, { useState, useEffect } from "react";
import Select from "react-select";

interface Option {
    value: string;
    label: string;
}

const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" }
];

interface MySelectProps {
    value: string | undefined;
    onChange: (value: string) => void;
}

export const MySelect: React.FC<MySelectProps> = ({ value, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    useEffect(() => {
        if (value) {
            const option = genderOptions.find((option) => option.value === value);
            setSelectedOption(option || null);
        } else {
            setSelectedOption(null);
        }
    }, [value]);

    const handleChange = (selectedOption: Option | null) => {
        setSelectedOption(selectedOption);
        if (selectedOption) {
            onChange(selectedOption.value);
        } else {
            onChange("");
        }
    };

    return (
        <Select
            className="gender-select"
            options={genderOptions}
            value={selectedOption}
            onChange={handleChange}
        />
    );
};