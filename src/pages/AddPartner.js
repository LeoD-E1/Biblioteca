import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/AddBook.css';

class AddPartner extends Component {

  constructor(){
    super();
    this.state = {

    };
  }

  render() {
    return (

      <div className="row">
      	<div className="col-lg-6">
      		<div className="card-header bg-primary text-white"><b>Agregar Socio</b></div><br/>
        	<div className="card-body">
  		     	<form action="../php/add_partner.php" method="post" autoComplete="off">
      				<label className="text" htmlFor="dni">Dni:</label><br/>
      				<input className="field" type="text" name="dni" id="dni" /><br/><br/>

      				<label className="text" htmlFor="nya">Nombre y Apellido:</label><br/>
      				<input className="field" type="text" name="nya" id="nya" /><br/><br/>

      				<label className="text" htmlFor="telefono">Telefono:</label><br/>
      				<input className="field" type="text" name="telefono" id="telefono" /><br/><br/>

      				<button type="submit" value="enviar" className="btn btn-primary">Registrar</button>
    				</form>
  			  </div>
		    </div>
      </div>
    );
  }
}

export default AddPartner
