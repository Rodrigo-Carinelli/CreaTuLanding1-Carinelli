import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
    console.log('renderizando NavBar');
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

