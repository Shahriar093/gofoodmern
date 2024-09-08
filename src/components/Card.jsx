import React, { useContext, useState } from 'react'
import { CartDispatchContext } from './ContextReducer';

export default function Card(props) {
    let handleAddToCart = useContext(CartDispatchContext);
    let option = Object.keys(props.food.options[0]);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(option[0]);
    let id = props.food._id, name = props.food.name;
    const authToken = localStorage.getItem('authToken');
    const WrapHandle = () => {
        // console.log({ id, name, qty, size });
        if (!authToken) {
            return alert('Please log in first');
        }
        handleAddToCart({ id, name, qty, size, finalPrice });
    }

    const finalPrice = qty * props.food.options[0][size];

    return (
        <div>
            <div className="card m-3" id='foood' style={{ width: "15rem", maxHeight: "380px" }}>
                <img src={props.food.img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.food.name}</h5>
                    {/* <p className="card-text">{props.food.description}</p> */}
                    <div className=" w-100">
                        <select className="m-1 h-100 bg-success rounded" onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1} >{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="m-1 h-100 bg-success rounded" onChange={(e) => setSize(e.target.value)}>
                            {
                                option.map((optn) => {
                                    return (
                                        <option key={optn} value={optn} >{optn}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='d-inline h-90 m-1'>
                            &#2547; {finalPrice}
                        </div>
                    </div>
                    <hr />
                    <button className='btn btn-success text-black fw-bold align-self-center'
                        onClick={WrapHandle}>
                        Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
