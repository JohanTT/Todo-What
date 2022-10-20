import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import TodoList from './components/TDcomponents/TodoList';
import Login from './components/Login';
import About from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import NoteList from './components/NoteComponents/NoteList';
import { MyContextProvider } from './contexts/MyContext';
import { NotesContextProvider } from './contexts/NotesContext';

function App() {
  return (
    <div className="CVT-app">
      <Nav>
      </Nav>
      <MyContextProvider>
        <NotesContextProvider>
          <BrowserRouter>
            <div>
                <Routes>
                  <Route exact path='/' element={ <Home/> } />
                  <Route exact path='/Home' element={ <Home/> } />
                  <Route exact path='/Login' element={ <Login/> } />
                  <Route exact path='/TodoList' element={ <TodoList/> } />
                  <Route exact path='/About' element={ <About /> } />
                  <Route exact path='/NoteList' element={ <NoteList /> } />
                </Routes>
            </div>
          </BrowserRouter>
        </NotesContextProvider>
      </MyContextProvider>
    </div>
  );
}

export default App;
