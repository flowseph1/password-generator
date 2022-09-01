import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

interface Props {
    active: boolean;
}

function CustomCheckBox(props: Props) {
    return (
        <div className={`flex items-center h-3 w-3 border border-white ${props.active && 'active'}`}>
            {props.active && <BsCheckLg className="h-7 w-7" />}
        </div>
    );
}

export default CustomCheckBox;
