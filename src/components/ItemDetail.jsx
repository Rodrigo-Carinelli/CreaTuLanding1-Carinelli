
import { useCart } from "../context/CartContext";
import { useState } from "react";

const ItemDetail = ({ id, title, price, image, description, stock }) => {
const { addToCart } = useCart();
const [cantidad, setCantidad] = useState(1);
const [agregado, setAgregado] = useState(false);

const handleAdd = () => {
    addToCart({ id, title, price, image }, cantidad);
    setAgregado(true);
};

const handleCantidadChange = (e) => {
    const value = parseInt(e.target.value);

    if (value >= 1 && value <= stock) {
    setCantidad(value);
    } else if (value > stock) {
    setCantidad(stock);
    } else {
    setCantidad(1);
    }
};

return (
    <div className="item-detail">
    <img src={image} alt={title} width="300" />
    <h3>{title}</h3>
    <p>{description}</p>
    <strong>${price}</strong>
    <p>Stock disponible: {stock}</p>

    {!agregado ? (
        <>
        <input
            type="number"
            value={cantidad}
            min={1}
            max={stock}
            onChange={handleCantidadChange}
        />
        <button onClick={handleAdd}>Agregar al carrito</button>
        </>
    ) : (
        <p>✅ Producto agregado al carrito</p>
    )}
    </div>
);
};

export default ItemDetail;
