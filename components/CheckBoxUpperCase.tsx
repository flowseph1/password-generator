import React, { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { addOptionBox, deleteOptionBox } from '../slices/boxesSlice';
import CustomCheckBox from './CustomCheckBox';

function CheckBoxUpperCase() {
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setActive(value => !value);
        if (!active) {
            dispatch(addOptionBox({ nameOption: 'UPPER', valueOption: 0.25 }));
        } else {
            dispatch(deleteOptionBox({ nameOption: 'UPPER', valueOption: 0.25 }));
        }
    };

    return (
        <div className={`flex space-x-5 items-center cursor-pointer `} onClick={handleClick}>
            <CustomCheckBox active={active} />
            <p className="text-sm">Include Uppercase Letters</p>
        </div>
    );
}

export default CheckBoxUpperCase;
