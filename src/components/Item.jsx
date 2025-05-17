import { Link } from "react-router-dom";

const Item = ({ producto }) => {
if (!producto) return null; 

return (
    <div className="item-card">
    <h3>{producto.title}</h3>
    <img src={producto.image} alt={producto.title} style={{ width: "200px" }} />
    <p>Precio: ${producto.price}</p>
    <Link to={`/item/${producto.id}`}>Ver detalle</Link>
    </div>
);
};

export default Item;
