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
