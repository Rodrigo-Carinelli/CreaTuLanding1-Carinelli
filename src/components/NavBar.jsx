import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

const NavBar = () => {
    console.log('renderizando NavBar');
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#282c34", color: "white" }}>
            <h1>Remeras Importadas</h1>
            <div>
                <Link to="/">Ropa</Link> | 
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;

