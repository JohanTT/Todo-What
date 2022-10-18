import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoList from './components/TDcomponents/TodoList';
import Login from './components/Login';
import About from './components/About';
import { MyContextProvider } from './contexts/MyContext';

function App() {
  return (
    <div className="todo-app">
      <MyContextProvider>
        <BrowserRouter>
        <nav>
          <Link to='/About'>About</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/TodoList'>My Todo List</Link>
        </nav>
        <div>
            <Routes>
              <Route exact path='/' element={ <Login/> } />
              <Route exact path='/Login' element={ <Login/> } />
              <Route exact path='/TodoList' element={ <TodoList/> } />
              <Route exact path='/About' element={ <About /> } />
            </Routes>
        </div>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
