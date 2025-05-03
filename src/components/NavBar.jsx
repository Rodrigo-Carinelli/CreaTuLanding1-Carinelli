/*
import CartWidget from "./CartWidget.jsx";


const NavBar = () => {
return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color: "white" }}>
    <h1>Mi E-commerce</h1>
    <div>
        <a href="#">Inicio</a> | <a href="#">Productos</a> | <a href="#">Contacto</a>
    </div>
    <CartWidget />
    </nav>
);
};

export default NavBar;


import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color: "white" }}>
    <h1>Tienda Importados</h1>
    <div>
        <Link to="/">Inicio</Link> | 
        <Link to="/categoria/electronica"> Electrónica</Link> | 
        <Link to="/categoria/ropa"> Ropa</Link> | 
        <Link to="/categoria/accesorios"> Accesorios</Link>
    </div>
    <CartWidget />
    </nav>
);
};

export default NavBar;

*/

import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color: "white" }}>
            <h1>Tienda Importados</h1>
            <div>
                <Link to="/">Inicio</Link> | 
                <Link to="/categoria/electronica"> Electrónica</Link> | 
                <Link to="/categoria/ropa"> Ropa</Link> | 
                <Link to="/categoria/accesorios"> Accesorios</Link>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;
