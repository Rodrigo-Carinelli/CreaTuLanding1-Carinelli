
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

