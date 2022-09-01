import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../features/store';

interface InitialState {
    options: string[];
    totalCont: number;
}

const initialState: InitialState = {
    options: [],
    totalCont: 0.05,
};

const boxesSlice = createSlice({
    name: 'boxes',
    initialState,
    reducers: {
        addOptionBox: (state, action) => {
            state.options = [...state.options, action.payload.nameOption];
            state.totalCont += action.payload.valueOption;
        },

        deleteOptionBox: (state, action) => {
            state.options = state.options.filter(option => option !== action.payload.nameOption);
            state.totalCont -= action.payload.valueOption;
        },
    },
});

export const { addOptionBox, deleteOptionBox } = boxesSlice.actions;

export const checkBoxesState = (state: RootState) => state.boxes;

export default boxesSlice.reducer;
