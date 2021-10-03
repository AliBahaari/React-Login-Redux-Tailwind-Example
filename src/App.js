import './App.css';
import {useSelector} from 'react-redux';
import LoginForm from './components/LoginForm';
import Message from './components/Message';

function App() {

  const login = useSelector((state) => state.login);
  console.log(login);

  return (
    <div className="container mx-auto px-10 flex-col flex items-center font-body">
      {
        login.logged === true ?
          <div>
            <div className="w-60 p-6 mx-auto bg-blue-700 text-white flex justify-center items-center my-6 rounded text-xl">Welcome {login.username}!</div>
          </div>
        :
          <div className="flex flex-col w-full items-center">
            <h2 className="text-5xl my-12">Log In Now!</h2>

            <LoginForm />
            
            {
              login.logInError === true ?
                <Message text="Enter at least 2 characters!" />
              :
                ''
            }

          </div>
      }
    </div>
  );
}

export default App;
