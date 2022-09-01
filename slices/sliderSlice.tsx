import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../features/store';

export interface SliderInitialState {
    charLength: number;
    exchange: number;
}

const initialState: SliderInitialState = {
    charLength: 10,
    exchange: 100,
};

export const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        addLength: (state, action) => {
            state.charLength = action.payload;

            if (action.payload > 7) {
                state.exchange = 100;
            }

            if (action.payload > 5 && action.payload < 8) {
                state.exchange = 75;
            }

            if (action.payload > 2 && action.payload < 6) {
                state.exchange = 30;
            }

            if (action.payload > 0 && action.payload < 3) {
                state.exchange = 0;
            }
        },
    },
});

export const { addLength } = sliderSlice.actions;

export const sliderState = (state: RootState) => state.slider;

export default sliderSlice.reducer;
