import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/header.css';
import '../img/escudo.svg';

class Header extends Component {

	constructor(){
		super();

		this.state = {
			showMenu:false,
		}

		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
	}


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

	render(){
		return(
			<div className="container">
				 	<nav className="navbar fixed-top navbar-dark bg-primary navbar-expand-lg mb-6">
				        <div className="container-fluid">
				            <div className="navbar-header">
				            	<img src={require ('../img/escudo.svg')} className="img-escudo" height="35px" width="30px" />
				                <a className="navbar-brand" href="#">&nbsp;&nbsp;Biblioteca &nbsp;&nbsp;E.E.S.T N°6 Chacabuco</a>
				            </div>
				            <button className="btn btn-primary btn-md" onClick = {this.showMenu} id="menu">&#9776;</button>
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
			        </nav>
         	</div>
		)
	}
}

export default Header
