import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import NoteList from './components/NoteComponents/NoteList';
import Timeline from './components/Timeline';
import { NotesContextProvider } from './contexts/NotesContext';

function App() {
  return (
    <div className="CVT-app">
      <BrowserRouter>
        <NotesContextProvider>
            <Routes>
              <Route exact path='/' element={ <Home/> } />
              <Route exact path='/Home' element={ <Home/> } />
              <Route exact path='/Timeline' element={ <Timeline/> } />
              <Route exact path='/About' element={ <About /> } />
              <Route exact path='/NoteList' element={ <NoteList /> } />
            </Routes>
        </NotesContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
