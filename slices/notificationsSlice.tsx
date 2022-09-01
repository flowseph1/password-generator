import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../features/store';

interface InitialState {
    notifications: { message: string; id: number }[];
}

const initialState: InitialState = {
    notifications: [],
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, action) => {
            state.notifications = [
                ...state.notifications,
                { message: action.payload, id: Math.floor(Math.random() * 10000) },
            ];
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter(notification => notification.id !== action.payload);
        },
    },
});

export const { addNotification, removeNotification } = notificationSlice.actions;

export const notificationsState = (state: RootState) => state.notification.notifications;

export default notificationSlice.reducer;
