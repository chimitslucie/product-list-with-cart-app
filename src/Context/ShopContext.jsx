import { createContext, useState } from "react";
import products from '../Data/Product.json';

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    };

    const handleDecrement = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
    }

    const getTotalCartAmount = () => {
        let totalAmout = 0;

        for (const productId in cartItems) {
            let productQuantity = cartItems[productId];

            if (productQuantity > 0) {
                let productInfo = products.find((product) => product.id == productId);
                totalAmout += productQuantity * productInfo.price;
            }
        }
        return totalAmout;
    }

    const getTotalCartSize = () => {
        let totalSize = 0;

        for (const productId in cartItems) {
            let productQuantity = cartItems[productId];
            if (productQuantity > 0) {
                totalSize += productQuantity;
            }
        }
        return totalSize;
    }

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }

    const cleanCart = (itemId) => {
        setCartItems(itemId == 0)
        setOpenModal(false);
    }

    const contextValue = {
        products,
        cartItems,
        setCartItems,
        addToCart,
        handleDecrement,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartSize,
        handleOpenModal,
        openModal,
        cleanCart
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}