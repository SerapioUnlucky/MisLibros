import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

const Crear = ({setListadoState}) => {

    const [libroState, setLibroState] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = libroState;

    const conseguirDatos = (e) => {

        //e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear objeto de la pelicula
        let libro = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        
        // Guardar estado
        setLibroState(libro);

        // Actualizar estado
        setListadoState(elementos => {
            return [...elementos, libro];
        });

        // Guardar en el almacenamiento local
        GuardarEnStorage("libros", libro);

    }

  return (

        <div className="add">

            <h3 className="title">Añadir libro</h3>

            <strong>
                {(titulo && descripcion) && "Has añadido el libro "+titulo}
            </strong>

            <form onSubmit={ conseguirDatos }>
                <input type="text" id="titulo" placeholder="Ingrese título del libro" required/>

                <textarea id="descripcion" name="descripcion" placeholder="Ingrese descripción del libro" required/>

                <input type="submit" id="save" value="Guardar" />
            </form>

        </div>

  )
}

export default Crear;
