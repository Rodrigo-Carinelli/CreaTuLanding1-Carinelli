
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
return (
    <div className="item-card">
    <h3>{product.nombre}</h3>
    <img src={product.imagen} alt={product.nombre} style={{ width: "200px" }} />
    <p>Precio: ${product.precio}</p>
    <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
);
};

export default Item;
