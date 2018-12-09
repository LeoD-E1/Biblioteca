import React, { Component } from 'react';
import '../styles/AddBook.css';

class AddBook extends Component {
  constructor(){
    super();
    this.state = {

    }
    this.onChangeId = this.onChangeId.bind(this);
  }

  onChangeId(e){
    let obj = document.getElementById('id');
    if (isNaN(obj.value)){
        alert('El ID no puede contener letras');
    }else {
      console.log(obj.value);
    }
  }

  render() {
    return (

      <div className="row">
      	<div className="col-lg-6">
      		<div className="card-header bg-primary text-white"><b>Agregar Libro</b></div><br/>
      		<div className="card-body">
		      	<form autoComplete="off">
    					<label className="text" htmlFor="id">ID:</label><br/>
    					<input className="field"
                type="text"
                name="id"
                id="id"
                onChange={this.onChangeId}
              /><br/><br/>

    					<label className="text" htmlFor="titulo">Titulo:</label><br/>
    					<input className="field"
                type="text"
                name="titulo"
                id="titulo"
              /><br/><br/>

    					<label className="text" htmlFor="autor">Autor:</label><br/>
    					<input className="field"
                type="text"
                name="autor"
                id="autor"
              /><br/><br/>

    					<label className="text" htmlFor="editorial">Editorial:</label><br/>
    					<input className="field"
                type="text"
                name="editorial"
                id="editorial"
              /><br/><br/><br/>

    					<button type="submit" value="enviar" className="btn btn-primary">Registrar</button>
    				</form>
			    </div>
		    </div>
      </div>
    );
  }
}

export default AddBook
