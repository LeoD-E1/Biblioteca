import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log('${result.user.email} ha iniciado sesion'))
    .catch(error => console.log('Error ${error.code}: ${error.message}'));
  }


  handleLogOut(){
    firebase.auth().signOut()
    .then(result => console.log('${result.user.email} ha cerrado sesion'))
    .catch(error => console.log('Error ${error.code}: ${error.message}'));
  }

  renderLoginButton(){
    //si el usuario esta loggeado
    if (this.state.user) {
      return (
        <div>
          <img src={this.state.user.photoURL} alt={this.state.user.displayName} width="200px"/><br/><br/>
          <h5>Hola {this.state.user.displayName}!</h5>
          <button className="btn btn-danger btn-md" onClick={this.handleLogOut}>Salir</button><br/><br/>
        </div>
      );
    }else {
      //Si no
      return(
        <button className="btn btn-prymary btn-lg" onClick={this.handleAuth}><img src = {require ('./img/google.png')} width="45px" className="googleButton"/></button>
      );
    }
  }

  render() {
    return (
      <div className="App">
        <br/><br/><br/>
        <h2 className="title">Biblioteca</h2>
        <p>Iniciar sesion con Google</p>
        { this.renderLoginButton()}
        <Header />
        <Carrusel />
        <div className="row-fluid">
          <AddBook />
          <AddPartner />
        </div>
        <Jumbo />
      </div>
    );
  }
}

export default App;
