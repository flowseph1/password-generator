import React, { useState } from 'react';
import CustomCheckBox from './CustomCheckBox';
import { useDispatch } from 'react-redux';
import { addOptionBox, deleteOptionBox } from '../slices/boxesSlice';

function CheckBoxNumbers() {
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setActive(value => !value);
        if (!active) {
            dispatch(addOptionBox({ nameOption: 'NUMBERS', valueOption: 0.25 }));
        } else {
            dispatch(deleteOptionBox({ nameOption: 'NUMBERS', valueOption: 0.25 }));
        }
    };
    return (
        <div className={`flex space-x-5 items-center cursor-pointer `} onClick={handleClick}>
            <CustomCheckBox active={active} />
            <p className="text-sm">Include Numbers</p>
        </div>
    );
}

export default CheckBoxNumbers;
