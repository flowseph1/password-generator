import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../features/store';

interface PassInitialState {
    value: string;
}

const initialState: PassInitialState = {
    value: '',
};

const passwordSlice = createSlice({
    name: 'pass',
    initialState,
    reducers: {
        addPass: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { addPass } = passwordSlice.actions;

export const passwordValue = (state: RootState) => state.pass.value;

export default passwordSlice.reducer;
