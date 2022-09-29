import React, { useContext } from 'react'
import { MyContext } from '../contexts/MyContext'
import { TodoContext } from '../contexts/TodoContext'


function Home() {
    const { username, isLogged } = useContext(MyContext);

    const { tasks } = useContext(TodoContext);

  return (
    <div>
        <h1>Home page</h1>
        <div>
            {isLogged && ( //&& là với điều kiện đúng, ? là kiểm tra đúng sai
                <div>Wellcome Pro</div>
            )}
            {isLogged ? (
                <div>Chao mung ban <strong>{username}</strong> tham trang cua tau</div>
            ) : (
                <div>Login you motherfuck</div>
            )}
        </div>
        {tasks.map(item => (
            <div>
                <h2>{item.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default Home