import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CartDispatchContext } from '../components/ContextReducer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Login() {
    let navigate = useNavigate();
    let handleAddToCart = useContext(CartDispatchContext);
    const [crededentials, setCrededentials] = useState({ email: "", password: "" })
    const onChange = (e) => {
        setCrededentials({ ...crededentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await axios.post('https://gofoodm.onrender.com/api/login', {
            email: crededentials.email,
            password: crededentials.password
        }).then((res) => {
            if (res.data.success === true) {
                // console.log(res.data);
                localStorage.setItem("authToken", res.data.authToken)
                localStorage.setItem('userId', res.data.id);
                alert('logged in successfully');
                navigate('/');
            }
            else {
                alert('Needs valid crededntials');
            }

        })
            .catch(err => console.log(err));

        handleAddToCart();

    }
    return (
        <div className='row formBody' style={{ minHeight: "100vh" }}>
            <Navbar />
            <div className='row offset-4 mb-3 col-7'>
                <h2 className='offset-3 col-7'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 col-7">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={crededentials.email} onChange={onChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 col-7">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={crededentials.password} onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-success m-3">Submit</button>
                    <Link to='/createuser' className="btn btn-danger m-3">Don't have an account?</Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}
