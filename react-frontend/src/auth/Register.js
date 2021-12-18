import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import logo from '../images/logo.png';
import './Auth.css';

const Register = () => {
    const navigate = useNavigate();
    const [loggedUser, setLoggedUser] = useState(false);
    const [user, setUser] = useState({ username: '', email: '', password: '', cpassword: '' })
    const handleInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    const userSignup = async () => {
        const res = await fetch('/user/signup', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        const data = await res.json();
        if (res.status === 200) {
            window.alert(data.msg);
            navigate('/');
        } else {
            window.alert(data.error);
        }
    }
    const checkLoggedUser = async () => {
        const res = await fetch('/user/check');
        if (res.status === 200) {
            setLoggedUser(false);
        } else {
            setLoggedUser(true);
        }
    }
    useEffect(() => {
        checkLoggedUser();
    }, [])

    if (loggedUser) {
        return <Navigate to="/" />;
    }
    return (
        <div className="form-wrapper">
            <div className="form-container">
                <div className="form-logo">
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <div className="form-fields">
                        <input name="username" type="text" className="form-control" id="name" placeholder="Username"
                            autoComplete="off" value={user.username} onChange={handleInput} />
                    </div>
                    <div className="form-fields">
                        <input name="email" type="email" className="form-control" id="email" placeholder="E-mail"
                            autoComplete="off" value={user.email} onChange={handleInput} />
                    </div>
                    <div className="form-fields">
                        <input name="password" type="password" className="form-control" id="password"
                            placeholder="Password" autoComplete="off" value={user.password} onChange={handleInput} />
                    </div>
                    <div className="form-fields">
                        <input name="cpassword" type="password" className="form-control" id="cpassword"
                            placeholder="Confirm Password" autoComplete="off" value={user.cpassword} onChange={handleInput} />
                    </div>
                    <button onClick={userSignup} className="btn-account">Submit</button>
                </div>
                <div className="account-toggle">
                    <p>Have an account?</p><Link to="/user/login">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
