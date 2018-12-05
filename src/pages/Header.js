import React, { Component } from 'react';
import '../styles/header.css';
import '../img/escudo.svg';
import firebase from 'firebase';

class Header extends Component {

	constructor(){
		super();

		this.state = {
			showMenu:false,
			user: null
		}

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
	}

// Mostrar/Ocultar opciones del nav
	showMenu(event) {
	    event.preventDefault();

	    this.setState({ showMenu: true }, () => {
	      document.addEventListener('click', this.closeMenu);
	    });
	  }

	  closeMenu() {
	    this.setState({ showMenu: false }, () => {
	      document.removeEventListener('click', this.closeMenu);
	    });
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
	        <div className='na'>
						<img className='imgUser' src={this.state.user.photoURL} alt={this.state.user.displayName} align='left' width="40px"/>
						<p >{this.state.user.displayName}</p>
						 <button align='right' className="btn btn-outline-danger btn-md" onClick={this.handleLogOut}>Salir</button>
	        </div>
	      );
	    }else {
	      //Si no esta loggeado
	      return(
	        <div>
	          <button className="btn btn-prymary btn-sm" onClick={this.handleAuth}><img src = {require ('../img/google.png')} width="35px" className="googleButton"/></button>
	        </div>
	      );
	    }
	  }

	render(){
		return(
			<div className="container">
				 			<nav className="navbar fixed-top navbar-dark bg-primary navbar-expand-lg mb-6">
				        <div className="container-fluid">
				            <div className="navbar-header">
				            	<img src={require ('../img/escudo.svg')} className="img-escudo" height="35px" width="30px" />
				                <a className="title navbar-brand" href="#">&nbsp;&nbsp;Biblioteca &nbsp;&nbsp;E.E.S.T N°6 Chacabuco</a>
				            </div>
				            <button id="btnDesplegate" className="btn btn-primary btn-md" onClick = {this.showMenu} id="menu">&#9776;</button>
				            	{this.state.showMenu
				            		? (
						            <ul className="navbar-nav">
						                <li className="nav-item active">
						                    <a className="nav-link" href="#">Inicio</a>
						                </li>
						                <li className="nav-item">
						                    <a className="nav-link" href="#">Libros</a>
						                </li>
						                <li className="nav-item">
						                    <a className="nav-link" href="#">Socios</a>
						                </li>
						                <li className="nav-item">
						                    <a className="nav-link" href="#">Prestamos</a>
						                </li>
						            </ul>
						            ) : (null)
				            	}
				        </div>
								{ this.renderLoginButton()}
			        </nav>
      </div>
		)
	}
}

export default Header
