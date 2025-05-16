
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <div>
            <span role="img" aria-label="cart">🛒</span>
            {totalQuantity > 0 && <span>({totalQuantity})</span>}
        </div>
    );
};

export default CartWidget;
