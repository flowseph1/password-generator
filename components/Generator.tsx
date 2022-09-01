import React, { ChangeEvent, SyntheticEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sliderState } from '../slices/sliderSlice';
import { generatePass } from './../utils/generatePass';
import Slider from './Slider';
import CheckBoxes from './CheckBoxes';
import { addPass } from '../slices/passwordSlice';
import Strength from './Strength';
import { BiRightArrowAlt } from 'react-icons/bi';
import { checkBoxesState } from '../slices/boxesSlice';
import { addNotification } from '../slices/notificationsSlice';

function Generator() {
    const dispatch = useDispatch();

    const _sliderState = useSelector(sliderState);

    const _checkBoxesState = useSelector(checkBoxesState);

    const handleCLick = () => {
        dispatch(addPass(generatePass(_sliderState.charLength, _checkBoxesState.options)));
        dispatch(addNotification('Password Generated'));
    };

    return (
        <div className="bg-zinc-800 p-4 w-full">
            <div className="flex justify-between items-center">
                <h3 className="text-sm text-gray-300">Character Length</h3>
                <h2 className="text-lg text-red-500 font-bold pr-3">{_sliderState.charLength}</h2>
            </div>
            <Slider />
            <CheckBoxes />
            <Strength />

            <button
                disabled={_checkBoxesState.options.length == 0 && true}
                className={`${
                    _checkBoxesState.options.length == 0 && 'disabled'
                } w-full flex space-x-5 items-center justify-center p-4 mt-5 bg-red-500 text-black font-semibold active:bg-red-600 transition hover:shadow-[inset_0_0_5px_1px_#931c1c]`}
                onClick={() => handleCLick()}
            >
                <p>Generate</p>
                <BiRightArrowAlt />
            </button>
        </div>
    );
}

export default Generator;
