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
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
const [productos, setProductos] = useState([]);
const { categoryId } = useParams();

useEffect(() => {
    
    const mockData = [
    { id: "1", nombre: "Producto A", precio: 100, imagen: "https://via.placeholder.com/200", categoria: "camisetas" },
    { id: "2", nombre: "Producto B", precio: 200, imagen: "https://via.placeholder.com/200", categoria: "pantalones" },
    ];

    const filtered = categoryId
    ? mockData.filter(prod => prod.categoria === categoryId)
    : mockData;

    setTimeout(() => {
    setProductos(filtered);
    }, 500);
}, [categoryId]);

return (
    <div>
    <h2>{greeting}</h2>
    <ItemList products={productos} />
    </div>
);
};

export default ItemListContainer;
