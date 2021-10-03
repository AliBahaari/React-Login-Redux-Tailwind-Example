import {useDispatch} from 'react-redux';
import {noLogInError} from '../redux/slices/loginSlice';

function Message(props) {

    const dispatch = useDispatch();

    const closeMessage = () => {
        dispatch(noLogInError());
    }

    return (
        <div className="bg-red-400 w-6/12 mx-auto px-6 py-4 flex justify-between items-center">
            <p className="text-white">{props.text}</p>
            <p className="text-white cursor-pointer text-2xl" onClick={closeMessage}>×</p>
        </div>
    );
}

export default Message;