import React, { useState } from 'react';

const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarLibro = (e) => {

    // Crear estado y actualizarlo
    setBusqueda(e.target.value);

    // Filtrar para buscar coincidencias
    let libros_encontrados = listadoState.filter(libro => {
      return libro.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase())
    });

    // Comprobar si hay un resultado
    if(busqueda.length <= 1 || libros_encontrados <= 0){
      libros_encontrados = JSON.parse(localStorage.getItem("libros"));
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false);
    }

    // Actualizar estado
    setListadoState(libros_encontrados);
  }

  return (
        <div className="search">
            <h3 className="title">Buscador</h3>

            {(noEncontrado === true && busqueda.length > 1) && (
              <span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>
            )}

            <form>
                <input type="text" placeholder="Escriba aquí para buscar un libro" id="search_field" name="busqueda" autoComplete="off" onChange={ buscarLibro } />
            </form>
        </div>
  )
}

export default Buscador;
