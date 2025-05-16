/*
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
    try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        let productList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
        }));
        console.log("Productos traídos de Firebase:", productList);

        if (categoryId) {
        productList = productList.filter(prod => prod.category === categoryId);
        }

        setProductos(productList);
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
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
