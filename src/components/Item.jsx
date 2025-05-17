import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
return (
    <div className="item-card">
    <h3>{product.title}</h3>
    <img src={product.image} alt={product.title} style={{ width: "200px" }} />
    <p>Precio: ${product.price}</p>
    <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
);
};

export default Item;
