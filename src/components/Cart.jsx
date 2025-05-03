import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
const { cart, removeFromCart, clearCart, totalPrice } = useCart();

if (cart.length === 0) {
    return (
    <div>
        <h2>🛒 Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
    </div>
    );
}

return (
    <div>
    <h2>🛍️ Carrito de compras</h2>
    <ul>
        {cart.map((item) => (
        <li key={item.id}>
            <img src={item.image} alt={item.title} width="80" />
            <p><strong>{item.title}</strong></p>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.cantidad}</p>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </li>
        ))}
    </ul>

    <h3>Total: ${totalPrice}</h3>
    <button onClick={clearCart}>Vaciar carrito</button>
    <br />
    <Link to="/checkout">
        <button>Finalizar compra</button>
    </Link>
    </div>
);
};

export default Cart;
