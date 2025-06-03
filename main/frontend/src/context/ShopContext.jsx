import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // useNavigate import qilindi

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (ItemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        setCartItems(prev => {
            const newCart = { ...prev };
            if (!newCart[ItemId]) {
                newCart[ItemId] = {};
            }
            newCart[ItemId][size] = (newCart[ItemId][size] || 0) + 1;
            return newCart;
        });
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                const quantity = cartItems[items][item];
                if (quantity > 0) {
                    totalCount += quantity;
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = (ItemId, size, quantity) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (!newCart[ItemId]) {
                newCart[ItemId] = {};
            }
            newCart[ItemId][size] = quantity;
            return newCart;
        });
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            const itemInfo = products.find((product) => product._id === items);
            if (itemInfo) {
                for (const item in cartItems[items]) {
                    const quantity = cartItems[items][item];
                    if (quantity > 0) {
                        totalAmount += itemInfo.price * quantity;
                    }
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,
        getCartCount, updateQuantity,
        getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;