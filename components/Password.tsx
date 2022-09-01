import { MdContentCopy } from 'react-icons/md';
import { passwordValue } from '../slices/passwordSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addNotification } from '../slices/notificationsSlice';

function Password() {
    const passValue = useSelector(passwordValue);

    const dispatch = useDispatch();

    const copyPass = () => {
        navigator.clipboard.writeText(passValue);
        dispatch(addNotification('Copy to Clipboard'));
    };

    return (
        <div className="bg-zinc-800 p-4 w-full">
            <div className="flex justify-between items-center">
                <p className="text-lg text-white">{passValue}</p>
                <div className="cursor-pointer p-2 hover:bg-zinc-900 rounded-md transition" onClick={copyPass}>
                    <MdContentCopy className="text-red-500 " />
                </div>
            </div>
        </div>
    );
}

export default Password;
