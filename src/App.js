import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/Listado";

function App() {

    const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            
            <h1>MisLibros</h1>
        
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Libros</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">

            {/*aqui van las peliculas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState} />

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            
            <Buscador listadoState={listadoState} setListadoState={setListadoState} />

            <Crear setListadoState={setListadoState} />
            
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Todos los derechos reservados - Sebastián Jerez.
        </footer>

    </div>
  );
}

export default App;
