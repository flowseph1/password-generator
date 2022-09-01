import React from 'react';
import { notificationsState } from '../slices/notificationsSlice';
import { useSelector } from 'react-redux';
import Notification from './Notification';
import { AnimatePresence, LayoutGroup } from 'framer-motion';

function Notifications() {
    const _notificationsState = useSelector(notificationsState);

    return (
        <div className="absolute right-20 bottom-20 text-white flex flex-col space-y-5">
            <LayoutGroup>
                <AnimatePresence>
                    {_notificationsState.map(notification => (
                        <Notification key={notification.id} notification={notification.message} id={notification.id} />
                    ))}
                </AnimatePresence>
            </LayoutGroup>
        </div>
    );
}

export default Notifications;
