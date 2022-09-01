import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeNotification } from '../slices/notificationsSlice';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
    notification: string;
    id: number;
}

function Notification({ notification, id }: Props) {
    const dispatch = useDispatch();

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(removeNotification(id));
        }, 5000);

        return () => clearTimeout(timeout);
    }, [dispatch, id]);

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                className="p-5 bg-zinc-800"
                layout
            >
                {notification}
            </motion.div>
        </AnimatePresence>
    );
}

export default Notification;
