
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const { itemId } = useParams();  
const [producto, setProducto] = useState(null);
const [loading, setLoading] = useState(true);
const { addToCart } = useCart();

useEffect(() => {
    if (!itemId) return;  

    const productRef = doc(db, "productos", itemId);

    getDoc(productRef)
    .then((resp) => {
        if (resp.exists()) {
        setProducto({
            id: resp.id,
            ...resp.data(),
        });
        } else {
        setProducto(null);

        }
    })
    .catch((error) => {
        console.error("Error al traer el producto:", error);
    })
    .finally(() => setLoading(false));
}, [itemId]);

return (
    <div>
    {loading ? (
        <h2>Cargando detalles...</h2>
    ) : producto ? (
        <ItemDetail {...producto} onAdd={addToCart} />
    ) : (
        <h2>Producto no encontrado</h2>
    )}
    </div>
);
};

export default ItemDetailContainer;
