/*
import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {
const [quantityAdded, setQuantityAdded] = useState(0);
const { addItem } = useContext(CartContext);

const handleAdd = (quantity) => {
    setQuantityAdded(quantity);
    addItem(product, quantity);
};

return (
    <div className="item-detail">
    <h2>{product.title}</h2>
    <img src={product.image} alt={product.title} width={200} />
    <p>{product.description}</p>
    <p>Precio: ${product.price}</p>
    <p>Stock disponible: {product.stock}</p>
    {
        quantityAdded > 0 ? (
        <p>Producto agregado al carrito ✔️</p>
        ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
        )
    }
    </div>
);
};

export default ItemDetail;
*/

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
