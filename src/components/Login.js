import React, { useContext, useState } from 'react'
import { MyContext } from '../contexts/MyContext';

function Login() {
    const [user, setUser] = useState(''); 
    const { setUsername, setIsLogged } = useContext(MyContext);

  return (
    
      <div>
        <h2>Login page</h2>
        Username:
        <input value={user} onChange={(e) => {
            setUser(e.target.value);
            setUsername(e.target.value);
            setIsLogged(e.target.value !== '');
        }} />
    </div>
  )
}

export default Login