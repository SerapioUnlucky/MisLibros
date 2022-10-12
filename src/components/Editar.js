import React from 'react'

const Editar = ({libro, conseguirLibros, setEditar, setListadoState}) => {

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir target del evento
        let target = e.target;

        // Buscar indice del objeto del libro a actualizar
        const libros_almacenados = conseguirLibros();
        const indice = libros_almacenados.findIndex(libro => libro.id === id);

        // Crear objeto con ese indice
        let libro_actualizado = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,

        };

        // Actualizar el elemento con ese indice
        libros_almacenados[indice] = libro_actualizado;

        // Guardar nuevo array en localStorage
        localStorage.setItem("libros", JSON.stringify(libros_almacenados));

        // Actualizar estado
        setListadoState(libros_almacenados);
        setEditar(0);

    }
    
    return (
        <div className='edit_form'>
            <h3 className="title">Editar libro</h3>
            <form onSubmit={e => guardarEdicion(e, libro.id)}>

                <input type="text" name="titulo" className="titulo_editado" placeholder={libro.titulo} />

                <textarea name="descripcion" placeholder={libro.descripcion} className="descripcion_editada" />

                <input type="submit" className="editar" value="Actualizar" />

            </form>
        </div>
    )
}

export default Editar
