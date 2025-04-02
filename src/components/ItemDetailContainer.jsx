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


