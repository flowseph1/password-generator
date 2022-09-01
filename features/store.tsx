import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from '../slices/sliderSlice';
import passwordReducer from '../slices/passwordSlice';
import boxesReducer from '../slices/boxesSlice';
import notificationReducer from '../slices/notificationsSlice';

export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        pass: passwordReducer,
        boxes: boxesReducer,
        notification: notificationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
