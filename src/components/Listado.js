import React, { useEffect, useState } from 'react';
import Editar from './Editar';

const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);

    useEffect( () => {

        conseguirLibros();

    }, []);

    const conseguirLibros = () => {

        let libros = JSON.parse(localStorage.getItem("libros"));

        setListadoState(libros);

        return libros;

    }

    const borrarLibro = (id) => {
        
        // Conseguir pelicula almacenadas
        let libros_almacenados = conseguirLibros();
        
        // Filtrar los libros para que elimine del array la que no quiero
        let nuevo_array_libros = libros_almacenados.filter(libro => libro.id !== parseInt(id));

        // Actualizar estado del listado
        setListadoState(nuevo_array_libros);
        
        // Actualizar los datos en el localStorage
        localStorage.setItem("libros", JSON.stringify(nuevo_array_libros));

    }

    return (
            <>

                {listadoState != null ? 

                    listadoState.map(libro => {

                        return (

                            <article key={libro.id} className="libro-item">
                                <h3 className="title">{libro.titulo}</h3>
                                <p className="description">{libro.descripcion}</p>

                                <button className="edit" onClick={ () => setEditar(libro.id)}>Editar</button>
                                <button className="delete" onClick={ () => borrarLibro(libro.id)}>Borrar</button>
                            
                                {/* Aparece formulario de editar */}
                                {editar === libro.id && (
                                    <Editar libro={libro} conseguirLibros={conseguirLibros} setEditar={setEditar} setListadoState={setListadoState} />
                                )}
                            
                            </article>

                        );
                        
                    })

                : <h2> No hay libros para mostrar</h2>  

                }

            </>
    );

}

export default Listado;
