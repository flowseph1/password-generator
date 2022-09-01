import React, { ChangeEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLength, sliderState } from '../slices/sliderSlice';

function Slider() {
    const dispatch = useDispatch();
    const _sliderState = useSelector(sliderState);

    const progressRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const position: number = 1 - (+value - 4) / 12;

        progressRef!.current!.style.right = `${position * 100}%`;

        dispatch(addLength(e.target.value));
    };

    return (
        <div className="relative">
            <div
                className="absolute bg-red-500 left-0 right-[50%] h-2 rounded-lg top-[50%] translate-y-[50%]"
                ref={progressRef}
            />
            <input
                type="range"
                min="4"
                max="16"
                step="1"
                className="w-full mt-5 appearance-none bg-zinc-900 rounded-lg"
                onChange={handleChange}
                defaultValue={_sliderState.charLength}
            />
            <div />
        </div>
    );
}

export default Slider;
