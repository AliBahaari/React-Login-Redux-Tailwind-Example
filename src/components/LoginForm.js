import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {logIn, logInError} from '../redux/slices/loginSlice';

function LoginForm() {

    const [username, setUsername] = useState('');

    const dispatch = useDispatch();

    const submitForm = (e) => {
        e.preventDefault();

        if (username.length > 2) {
            dispatch(logIn(username));
        } else {
            dispatch(logInError());
        }

    }

    return (
        <>
            <form className="w-4/12 m-auto my-6" onSubmit={submitForm}>
                <input type="text" className="border-2 border-gray-200 w-full px-1" onChange={(e) => setUsername(e.target.value)} />
                <button className="w-full bg-green-400 my-2 h-12 text-2xl">Log In</button>
            </form>
        </>
    );
}

export default LoginForm;