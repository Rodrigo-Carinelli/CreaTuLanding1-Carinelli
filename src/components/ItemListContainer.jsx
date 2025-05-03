/*
const ItemListContainer = ({ greeting }) => {
    return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>{greeting}</h2>
    </div>
    );
};

export default ItemListContainer;



import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const productos = [
{ id: 1, nombre: "Laptop", categoria: "electronica" },
{ id: 2, nombre: "Camiseta", categoria: "ropa" },
{ id: 3, nombre: "Reloj", categoria: "accesorios" }
];

const ItemListContainer = ({ greeting }) => {
const { categoriaId } = useParams();
const [items, setItems] = useState([]);

useEffect(() => {
    setTimeout(() => {
    const filtrados = categoriaId ? productos.filter(prod => prod.categoria === categoriaId) : productos;
    setItems(filtrados);
    }, 1000);
}, [categoriaId]);

return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
    <h2>{greeting || "Lista de productos"}</h2>
    {items.length > 0 ? (
        items.map(item => (
        <div key={item.id}>
            <a href={`/item/${item.id}`}>{item.nombre}</a>
        </div>
        ))
    ) : (
        <p>Cargando productos...</p>
    )}
    </div>
);
};

export default ItemListContainer;

*/

import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; 
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const [productos, setProductos] = useState([]);
const { categoryId } = useParams(); 

useEffect(() => {

    const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "productos"));
    let productList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));


    if (categoryId) {
        productList = productList.filter(prod => prod.category === categoryId);
    }

    setProductos(productList);
    };

    getProducts();
}, [categoryId]); 

return (
    <div>
    <h2>{greeting}</h2>
    {productos.length === 0 ? (
        <p>No se encontraron productos.</p>
    ) : (
        <ItemList productos={productos} />
    )}
    </div>
);
};

export default ItemListContainer;
