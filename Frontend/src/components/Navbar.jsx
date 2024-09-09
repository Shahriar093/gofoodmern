import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import PortalComponent from './PortalComponent';
import CartIcon from './CartIcon';
import { MdCancel } from "react-icons/md";

export default function Navbar() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken');
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    return (
        <div style={{ zIndex: "1" }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link text-white mb-2" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white mb-2" aria-current="page" to="/myorder">My Orders</Link>
                            </li>
                        </ul>
                        {authToken ?
                            <ul className='ms-auto d-flex'>
                                <div onClick={() => setShowModal(true)} >
                                    <CartIcon />
                                </div>
                                <button className='btn bg-white text-danger fw-bold m-1' onClick={handleLogout}>
                                    Logout
                                </button>
                            </ul>
                            : null
                        }
                        {
                            !authToken ?
                                <div>
                                    <Link className="btn bg-white text-success m-2 fw-bold" to="/loginuser">Login</Link>
                                    <Link className="btn bg-white text-success m-2 fw-bold" to="/createuser">SignUp</Link>
                                </div> :
                                null
                        }
                    </div>
                </div>
            </nav>
            {showModal ?
                <PortalComponent>
                    <button style={{ height: "2rem", position: "absolute" }} className='btn btn-danger' onClick={() => setShowModal(false)} >
                        <MdCancel />
                    </button>
                </PortalComponent> : null
            }
        </div>
    )
}