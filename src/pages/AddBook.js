import React, { Component } from 'react';
import '../styles/AddBook.css';

class AddBook extends Component {
  render() {
    return (

      <div className="row-fluid">
      	<div className="col-lg-6">
      		<div className="card-header bg-primary text-white"><b>Agregar Libro</b></div><br/>
      		<div className="card-body">
		      	<form action="../php/add_book.php" method="post" autoComplete="off">
					<label className="text" htmlFor="id">ID:</label><br/>
					<input className="field" type="text" name="id" id="id" /><br/><br/>

					<label className="text" htmlFor="titulo">Titulo:</label><br/>
					<input className="field" type="text" name="titulo" id="titulo" /><br/><br/>

					<label className="text" htmlFor="autor">Autor:</label><br/>
					<input className="field" type="text" name="autor" id="autor" /><br/><br/>

					<label className="text" htmlFor="editorial">Editorial:</label><br/>
					<input className="field" type="text" name="editorial" id="editorial" /><br/><br/><br/>

					<button type="submit" value="enviar" className="btn btn-primary">Registrar</button>
				</form>
			</div>
		</div>
      </div>
    );
  }
}

export default AddBook
