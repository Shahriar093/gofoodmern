import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import axios from 'axios';
import { CartProvider, CartStateContext } from '../components/ContextReducer.jsx';
export default function Home() {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [srchFood, setsrchFood] = useState("");
    const loadData = async () => {
        let result = await axios.get('https://gofoodm.onrender.com/home/')
        setItems(result.data[0]);
        setCategories(result.data[1]);
    }
    const handleSearch = (e) => {
        setsrchFood(e.target.value);
    }
    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
                    <div className="carousel-inner" id='carousel'>import {CartProvider} from './../components/ContextReducer';

                        <div className="carousel-caption" style={{ zIndex: "10" }}>
                            <form className="d-flex">
                                <input value={srchFood} className="form-control me-2" style={{ borderRadius: "2rem" }} type="search" placeholder="Search Item Name" aria-label="Search" onChange={handleSearch} />
                            </form>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1701579231349-d7459c40919d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.unsplash.com/photo-1683533746199-9e3920bf3eab?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="container">
                {
                    categories.length > 0 ? categories.map((data) => {
                        return (
                            <div key={data._id} className='row mb-3'>
                                <div className='fs-3 fst-bold'> {data.CategoryName} </div> <hr />
                                {
                                    items.filter((item) => item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(srchFood.toLowerCase()) || item.CategoryName.toLowerCase().includes(srchFood.toLowerCase()))).map((food) => {
                                        return (
                                            <div key={food._id} className='col-12 col-md-6 col-lg-3'>
                                                <Card food={food} className='m-3' />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                        : <div> Items unavailable </div>
                }
            </div>
            <div><Footer /></div>
        </div>
    )
}
