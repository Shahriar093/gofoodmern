import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

export const CartProvider = ({ children }) => {
    const [itemN, setItemN] = useState();
    const handleAddToCart = async (data) => {
        // console.log(data);
        if (data) {
            await axios.post(`http://localhost:8080/${localStorage.getItem('userId')}/add`, data)
                .then(res => console.log(res.data))
                .catch(error => console.log(error));
        }
        // getting the cart
        await axios.get(`http://localhost:8080/${localStorage.getItem('userId')}/getcart`)
            .then((res) => {
                setItemN(res.data.length);
            })
            .catch(error => console.log(error));;
    }
    useEffect(() => {
        handleAddToCart();
    }, []);
    return (
        <CartDispatchContext.Provider value={handleAddToCart}>
            <CartStateContext.Provider value={itemN}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}