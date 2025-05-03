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
