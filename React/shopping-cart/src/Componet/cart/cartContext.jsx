import { createContext, useEffect, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    

    useEffect(() => {
        totalCartPrice();
    }, [cart]);

    function addToCart(product) {
        setCart(prevCart => {
            const exists = prevCart.some(item => item.id === product.id);
            return exists 
            ? prevCart 
            : [...prevCart, { ...product, totalprice: product.price }];
        });
    }

    function totalCartPrice() {
        setTotalPrice(cart.reduce((pre, current) => pre + current.totalprice, 0));
    }

    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    }

    

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice, totalCartPrice, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
