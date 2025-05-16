
import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutFrom = () => {
    console.log("📦 Componente CheckoutFrom cargado");
const { cart, totalPrice, clearCart } = useCart();
const [orderId, setOrderId] = useState(null);
const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
});
const [error, setError] = useState(null); 
const navigate = useNavigate();


const handleChange = (e) => {
    setForm({
    ...form,
    [e.target.name]: e.target.value,
    });
};


const handleSubmit = async (e) => {
    e.preventDefault();


    if (cart.length === 0) {
    setError("El carrito está vacío. Por favor, agrega productos antes de realizar la compra.");
    return;
    }

    const order = {
    buyer: form,
    items: cart,
    total: totalPrice,
    date: Timestamp.fromDate(new Date()),
    };

    const ordersRef = collection(db, "ordenes");

    try {
    const doc = await addDoc(ordersRef, order);
    setOrderId(doc.id);
    clearCart();
    } catch (error) {
    console.error("Error al generar la orden:", error);
    setError("Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.");
    }
};


if (orderId) {
    return (
    <div>
        <h2>✅ ¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
    );
}

return (
    <div>
    <h2>Finalizar compra</h2>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar errores */}
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        required
        />
        <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={form.email}
        onChange={handleChange}
        required
        />
        <input
        type="tel"
        name="telefono"
        placeholder="Tu teléfono"
        value={form.telefono}
        onChange={handleChange}
        required
        />
        <button type="submit">Confirmar compra</button>
    </form>
    </div>
);
};

export default CheckoutFrom;

