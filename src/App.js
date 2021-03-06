import React, { Component } from 'react';
import firebase from 'firebase';
import './styles/App.css';
import Header from './pages/Header.js';
import Carrusel from './pages/Carrusel.js';
import AddBook from './pages/AddBook.js';
import AddPartner from './pages/AddPartner.js';
import Jumbo from './pages/Jumbo';

class App extends Component {

  constructor(){
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
          <Header />
        <div className='contTitle'>
          <h2 className="title">Biblioteca</h2>
        </div>

        <Carrusel />
        <AddBook />
        <AddPartner />
        <Jumbo />
      </div>
    );
  }
}

export default App;
