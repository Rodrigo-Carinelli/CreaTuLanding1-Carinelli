
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to="/cart" style={{ textDecoration: "none", color: "inherit" }}>
            <span role="img" aria-label="cart">🛒</span>
            {totalQuantity > 0 && <span>({totalQuantity})</span>}
        </Link>
    );
};

export default CartWidget;
