import React, { useContext, useState } from 'react'
import { useNavigate  } from 'react-router-dom';
import { MyContext } from '../contexts/MyContext';

function Login() {
    const [user, setUser] = useState(''); 
    const [pass, setPass] = useState('');
    const { setUsername, setIsLogged, setPassWork, username, passwork, isLogged } = useContext(MyContext);
    let navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>Login page</h2>
        Username:
        <input value={user} onChange={(e) => {
          setUser(e.target.value);
        }} />
        </div>
        <div>
        Passwork: 
        <input value={pass} onChange={(e) => {
          setPass(e.target.value);
        }} />
        </div>
        <div>
        <button type='submit' onClick={(e) => {
          if (user === username && pass === passwork) 
          {
            <h2>Voo di</h2>
            console.log("Voo di");
            // console.log(isLogged);
            setIsLogged(true);
            // console.log(isLogged);
            navigate('/TodoList');
          }
          else console.log("Deo cho vao");
        }} > Đăng nhập </button>
        
      </div>
    </div>
  )
}

export default Login