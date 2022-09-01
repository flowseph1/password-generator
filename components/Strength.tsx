import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { checkBoxesState } from '../slices/boxesSlice';
import { sliderState } from '../slices/sliderSlice';
import { calculateStrength } from './../utils/calculateStrength';

function Strength() {
    const _sliderState = useSelector(sliderState);
    const _checkBoxesState = useSelector(checkBoxesState);

    const [strength, setStrength] = useState('default');

    useEffect(() => {
        setStrength(calculateStrength(_sliderState.exchange, _checkBoxesState.totalCont));
    }, [_sliderState, _checkBoxesState]);

    // Logs.

    return (
        <div className="bg-zinc-900 mt-5 flex justify-between p-4">
            <div className="text-zinc-500 font-semibold">STRENGTH</div>
            <div className="flex items-center space-x-2">
                <p>{strength}</p>
                <div className="flex space-x-1 items-center">
                    <div
                        className={`h-5 w-2 border border-white ${strength == 'WEAK' && 'bg-red-500 border-red-500'} ${
                            strength == 'POOR' && 'bg-orange-500 border-orange-500'
                        }  ${strength == 'MEDIUM' && 'bg-yellow-500 border-yellow-500'} ${
                            strength == 'STRONG' && 'bg-green-500 border-green-500'
                        }`}
                    />
                    <div
                        className={`h-5 w-2 border border-white ${
                            strength == 'POOR' && 'bg-orange-500 border-orange-500'
                        }  ${strength == 'MEDIUM' && 'bg-yellow-500 border-yellow-500'}  ${
                            strength == 'STRONG' && 'bg-green-500 border-green-500'
                        }`}
                    />
                    <div
                        className={`h-5 w-2 border border-white  ${
                            strength == 'MEDIUM' && 'bg-yellow-500 border-yellow-500'
                        }  ${strength == 'STRONG' && 'bg-green-500 border-green-500'}`}
                    />
                    <div
                        className={`h-5 w-2 border border-white ${
                            strength == 'STRONG' && 'bg-green-500 border-green-500'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}

export default Strength;
