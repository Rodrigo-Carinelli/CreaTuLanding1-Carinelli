/*
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (item, cantidad) => {
    const itemIndex = cart.findIndex(prod => prod.id === item.id);
    const newItem = { ...item, cantidad };

    if (itemIndex !== -1) {
    const newCart = [...cart];
    newCart[itemIndex].cantidad += cantidad;
    setCart(newCart);
    } else {
    setCart([...cart, newItem]);
    }
};

const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
};

const clearCart = () => setCart([]);

const totalQuantity = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

return (
    <CartContext.Provider
    value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity, totalPrice }}
    >
    {children}
    </CartContext.Provider>
);
};
*/

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);


useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
    setCart(storedCart);
    }
}, []);


useEffect(() => {
    if (cart.length > 0) {
    localStorage.setItem("cart", JSON.stringify(cart));
    }
}, [cart]);

const addToCart = (item, cantidad) => {
    const itemIndex = cart.findIndex(prod => prod.id === item.id);
    const newItem = { ...item, cantidad };

    if (itemIndex !== -1) {
    const newCart = [...cart];
    newCart[itemIndex].cantidad += cantidad;
    setCart(newCart);
    } else {
    setCart([...cart, newItem]);
    }
};

const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
};

const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); 
};

const totalQuantity = cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);

return (
    <CartContext.Provider
    value={{ cart, addToCart, removeFromCart, clearCart, totalQuantity, totalPrice }}
    >
    {children}
    </CartContext.Provider>
);
};
