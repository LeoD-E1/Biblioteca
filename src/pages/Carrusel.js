import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Carrusel extends Component {
	render(){
		return(
			<Carousel>
                <div>
                    <img src={require ('../img/1.jpg')}/>
                    <p className="legend">Libros de los mejores autores de todos los tiempos</p>
                </div>
                <div>
                    <img src={require ('../img/2.jpg')}/>
                    <p className="legend">Ingresando tus datos ya podes pedir prestamo de tus libros favoritos</p>
                </div>
                <div>
                    <img src={require ('../img/3.jpg')}/>
                    <p className="legend">Contamos con un lugar tranquilo para tu lectura</p>
                </div>
                <div>
                    <img src={require ('../img/4.jpg')}/>
                    <p className="legend">Contamos con todo tipo de libros, desde la biblia hasta lo mas moderno</p>
                </div>
                <div>
                    <img src={require ('../img/5.jpg')}/>
                    <p className="legend">Hace volar tu imaginacion</p>
                </div>
                <div>
                    <img src={require ('../img/6.jpg')}/>
                    <p className="legend">Aprende de los mejores</p>
                </div>
            </Carousel>
		)
	}
}

export default Carrusel
