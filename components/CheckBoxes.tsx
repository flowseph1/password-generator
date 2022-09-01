import React from 'react';
import CheckBoxUpperCase from './CheckBoxUpperCase';
import CheckBoxLowerCase from './CheckBoxLowerCase';
import CheckBoxNumbers from './CheckBoxNumbers';
import CheckBoxSymbols from './CheckBoxSymbols';

function CheckBoxes() {
    const handleCheckBox = () => {
        return;
    };

    return (
        <div className="flex flex-col mt-5 space-y-1">
            <CheckBoxUpperCase />
            <CheckBoxLowerCase />
            <CheckBoxNumbers />
            <CheckBoxSymbols />




        </div>
    );
}

export default CheckBoxes;
