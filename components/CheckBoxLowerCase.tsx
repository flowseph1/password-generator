import React, { useState } from 'react';
import { addOptionBox, deleteOptionBox } from '../slices/boxesSlice';
import CustomCheckBox from './CustomCheckBox';
import { useDispatch } from 'react-redux';

function CheckBoxLowerCase() {
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setActive(value => !value);

        if (!active) {
            dispatch(addOptionBox({ nameOption: 'LOWER', valueOption: 0.25 }));
        } else {
            dispatch(deleteOptionBox({ nameOption: 'LOWER', valueOption: 0.25 }));
        }
    };

    return (
        <div className={`flex space-x-5 items-center cursor-pointer `} onClick={handleClick}>
            <CustomCheckBox active={active} />
            <p className="text-sm">Include Lowercase Letters</p>
        </div>
    );
}

export default CheckBoxLowerCase;
