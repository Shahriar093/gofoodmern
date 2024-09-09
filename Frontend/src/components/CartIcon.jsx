import React, { useContext } from 'react';
import { CartStateContext } from './ContextReducer';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CartIcon = () => {
    const Cart = useContext(CartStateContext);
    return (
        <div className="cart-icon-container" style={{ marginRight: "8px" }}>
            <div className="cart-icon">
                <FaShoppingCart style={{ color: 'white', fontSize: '35px', margin: '5px' }} />
            </div>
            {Cart > 0 && (
                <div className="notification-badge">
                    {Cart}
                </div>
            )
            }
        </div >
    );
};

export default CartIcon;
