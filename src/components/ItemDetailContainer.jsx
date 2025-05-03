/*
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
{ id: 1, nombre: "Laptop", categoria: "electronica", descripcion: "Laptop potente" },
{ id: 2, nombre: "Camiseta", categoria: "ropa", descripcion: "Camiseta de algodón" },
{ id: 3, nombre: "Reloj", categoria: "accesorios", descripcion: "Reloj elegante" }
];

const ItemDetailContainer = () => {
const { itemId } = useParams();
const [producto, setProducto] = useState(null);

useEffect(() => {
    setTimeout(() => {
    setProducto(productos.find(prod => prod.id.toString() === itemId));
    }, 1000);
}, [itemId]);

return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    {producto ? (
        <>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        </>
    ) : (
        <p>Cargando producto...</p>
    )}
    </div>
);
};

export default ItemDetailContainer;



import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom"; 
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const { itemId } = useParams(); 
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const productRef = doc(db, "productos", itemId);

    getDoc(productRef)
    .then((resp) => {
        setProducto({
        id: resp.id,
        ...resp.data()
        });
    })
    .finally(() => setLoading(false));
}, [itemId]);

return (
    <div>
    {loading ? <h2>Cargando detalles...</h2> : <ItemDetail {...producto} />}
    </div>
);
};

export default ItemDetailContainer;

*/

import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = ({ productId }) => {
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);
const { addToCart } = useCart();

useEffect(() => {
    const productRef = doc(db, "productos", productId);

    getDoc(productRef)
    .then((resp) => {
        setProducto({
        id: resp.id,
        ...resp.data(),
        });
    })
    .finally(() => setLoading(false));
}, [productId]);

return (
    <div>
    {loading ? <h2>Cargando detalles...</h2> : <ItemDetail {...producto} onAdd={addToCart} />}
    </div>
);
};

export default ItemDetailContainer;

