import React from 'react';
import './App.css';
import Movielist from './Movielist';
import Nav from './Nav';
import AddMovie from './AddMovie';
import { MovieProvider } from './Moviecontext';

function App() {

  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <Movielist />
      </div>
    </MovieProvider>
  );
}

export default App;
