import React, { useContext, useState } from 'react'
import { MyContext } from '../contexts/MyContext';

function Login() {
    const [user, setUser] = useState(''); 
    const [pass, setPass] = useState('');
    const { setUsername, setIsLogged, setPassWork } = useContext(MyContext);

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
          setPassWork(e.target.value);
          setUsername(e.target.value);
          setIsLogged(e.target.value !== '');
        }} > Đăng nhập </button>
      </div>
    </div>
  )
}

export default Login