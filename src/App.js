import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Login from './components/Login';
import About from './components/About';
import HomePage  from './components/Home';
import { MyContextProvider } from './contexts/MyContext';
import { TodoContextProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="todo-app">
      {/* <MyContextProvider>
        <BrowserRouter>
        <nav>
          <Link to='/About'>About</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Home'>Home</Link>
        </nav>
          <TodoContextProvider>
            <Routes>
              <Route exact path='/Home' element={ <HomePage/> } />
              <Route exact path='/' element={ <HomePage/> } />
              <Route exact path='/Login' element={ <Login/> } />
              <Route exact path='/About' element={ <About /> } />
            </Routes>
          </TodoContextProvider>

        </BrowserRouter>
      </MyContextProvider> */}
            <TodoList></TodoList>
    </div>
  );
}

export default App;
