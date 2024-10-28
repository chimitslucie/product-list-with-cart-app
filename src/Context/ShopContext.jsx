import { createContext, useEffect, useState } from "react";
import products from '../Data/Product.json';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const contextValue = {
        cartItems,
        addToCart
    };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}
