import React, { useContext } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { CartDispatchContext } from '../components/ContextReducer'
import Footer from '../components/Footer'
export default function AdressForm() {
    let handleAddToCart = useContext(CartDispatchContext);
    let navigate = useNavigate();
    const handleSubmission = async (e) => {
        e.preventDefault();
        axios.delete(`https://gofoodm.onrender.com/${localStorage.getItem('userId')}/deletecart`).then(res => console.log(res.data));
        alert('Ordered Successfully. Product will be delivered within 1 Crore year. Thank you 😊!')
        handleAddToCart();
        navigate('/');
    }

    return (
        <div className='formBody'>
            <Navbar />
            <div className='row'>
                <form className='col-8 offset-3 needs-validation' onSubmit={handleSubmission} novalidate>
                    <h2 className='offset-2'>
                        Delievery Details
                    </h2>
                    <div className="form-row m-2">
                        <div className="form-group col-sm-12 col-md-8 col-lg-8">
                            <label htmlFor="inputName">Receiver Name</label>
                            <input type="text" className="form-control" id="inputname" placeholder="Name" required />
                        </div>
                    </div>
                    <div className="form-group col-sm-12 col-md-6 col-lg-8 m-2">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="116-North, CUET" required />
                    </div>
                    <div className="form-row m-2">
                        <div className="form-group col-md-6">
                            <label htmlFor="Mobile">Mobile</label>
                            <input type="text" className="form-control" id="inputmobile" placeholder='+8801*********' required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Mobile">Alternative Contact</label>
                            <input type="text" className="form-control" id="inputmobile" />
                        </div>
                    </div>
                    <div className="form-group m-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck" >
                                Will Cutlery be provided if available?
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success m-2">Order Now</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}
