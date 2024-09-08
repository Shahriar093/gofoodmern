import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { CartDispatchContext } from '../components/ContextReducer';
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function MyCart() {

    let handleAddToCart = useContext(CartDispatchContext);
    const [items, setItems] = useState();
    const [taka, settaka] = useState(0);
    const calculateTot = (data) => {
        let tot = 0
        if (data) {
            data.map((item) => tot = tot + item.price);
        }
        settaka(tot);
    }
    const viewCart = async () => {
        await axios.get(`http://localhost:8080/${localStorage.getItem('userId')}/getcart`)
            .then((res) => {
                let data = res.data;
                setItems(data);
                calculateTot(data);
            })
    }
    const handleRemove = async (id) => {
        await axios.delete(`http://localhost:8080/${id}/removecart`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        viewCart();
        handleAddToCart();
        // console.log('handling');
    }
    let navigate = useNavigate();
    const handleCheckOut = () => {
        viewCart();
        navigate('/adressform');
    }

    useEffect(() => {
        viewCart();
    }, []);


    return (
        <div style={{ background: "#81c98c" }} >
            <h1 className='offset-5' style={{ color: "black" }}>Your Cart</h1>
            <div className=' m-4' style={{ minWidth: "80vw" }}>
                {items ? (
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: "black" }}>
                        <thead>
                            <tr>
                                <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Product Name</th>
                                <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Quantity</th>
                                <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Size</th>
                                <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Price</th>
                                <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Remove</th>
                                {/* <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Total</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item._id}>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>{item.name}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>{item.quantity}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>{item.size}</td>
                                    <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>&#2547;{item.price}</td>
                                    <td className='deleteCart' style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>\
                                        <MdDelete onClick={() => handleRemove(item._id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <h2 className='me-auto' style={{ fontWeight: "bolder", color: "black" }} colSpan={5}>Final Price: {taka}</h2>
                    </table>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            <button onClick={handleCheckOut} className='btn btn-danger offset-5' style={{ width: "20vw" }}>Check Out</button>
        </div>
    );
}
