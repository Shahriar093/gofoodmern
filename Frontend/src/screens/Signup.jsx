import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function Signup() {
    let navigate = useNavigate();
    const [crededentials, setCrededentials] = useState({ username: "", email: "", password: "" })
    const onChange = (e) => {
        setCrededentials({ ...crededentials, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/api/create', {
            username: crededentials.username,
            email: crededentials.email,
            password: crededentials.password
        }).then((result) => {
            console.log(result.data);
            navigate('/loginuser');
        })
            .catch(err => console.log(err));
    }

    return (
        <div className='formBody' style={{ minHeight: "100vh" }}>
            <Navbar />
            <div className='row offset-3'>
                <h2 className='offset-3 col-7'>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 col-7">
                        <label htmlFor="exampleInputUserName" className="form-label">Username</label>
                        <input type="username" className="form-control" id="exampleInputUserName" name='username' value={crededentials.username} onChange={onChange} />
                        <div id="UserNameHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
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
                    <Link to='/loginuser' className="btn btn-danger m-3">Already a user?</Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}
