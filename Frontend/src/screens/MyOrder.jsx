import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [items, setItems] = useState();
    const [taka, settaka] = useState(0);
    const calculateTot = (data) => {
        let tot = 0
        if (data) {
            data.map((item) => tot = tot + item.price);
        }
        settaka(tot);
    }
    const viewOrder = async () => {
        await axios.get(`https://gofoodm.onrender.com/${localStorage.getItem('userId')}/vieworder`)
            .then((res) => {
                let data = res.data;
                setItems(data);
                calculateTot(data);
            })
    }

    useEffect(() => {
        viewOrder();
    }, []);


    return (
        <div className='formBody' style={{ minHeight: "100vh" }}>
            <Navbar />
            <div className='bg-success m-5'>
                <h1 className='offset-4' style={{ color: "black" }}>Your Ordered Items</h1>
                <div className=' m-4' style={{ Width: "80vw" }}>
                    {items ? (
                        <table style={{ width: '80%', borderCollapse: 'collapse', color: "black" }}>
                            <thead>
                                <tr>
                                    <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Product Name</th>
                                    <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Quantity</th>
                                    <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Size</th>
                                    <th style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item._id}>
                                        <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>{item.name}</td>
                                        <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>{item.quantity}</td>
                                        <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>{item.size}</td>
                                        <td style={{ borderBottom: '1px solid #ddd', padding: '5px' }}>&#2547;{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <h2 className='me-auto' style={{ fontWeight: "bolder", color: "black" }} colSpan={5}>You spent: {taka}</h2>
                        </table>
                    ) : (
                        <p>Your ordered list is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
}
