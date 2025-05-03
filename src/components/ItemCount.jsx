import React, { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
const [cantidad, setCantidad] = useState(1);

const handleIncrement = () => {
    if (cantidad < stock) {
    setCantidad(cantidad + 1);
    }
};

const handleDecrement = () => {
    if (cantidad > 1) {
    setCantidad(cantidad - 1);
    }
};

return (
    <div>
    <button onClick={handleDecrement}>-</button>
    <span>{cantidad}</span>
    <button onClick={handleIncrement}>+</button>
    <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
);
};

export default ItemCount;
