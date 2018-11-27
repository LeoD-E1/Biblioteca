import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class Jumbo extends Component{

  render(){
    return(
      <Jumbotron>
        <h1>La eternidad es una de las raras virtudes de la literatura.</h1>
        <p>
          'Cuando un pueblo ya no lee a sus escritores, los festeja'. 'Ser escritor es robarle vida a la muerte'. 'No se hace buena literatura con buenas intenciones ni con buenos sentimientos'.
        </p>
        <p>
          <a href="#"><Button bsStyle="primary">mas frases</Button></a>
        </p>
      </Jumbotron>
    )
  }
}
export default Jumbo
