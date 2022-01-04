import React, { useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import "./App.css";

// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashBoard from "./user/DashBoard";
import Navbar from "./components/navbar";
import Home from "./components/home";
function App() {
    const [user, setUser] = useState(null);
    const getUser = async () => {
        const res = await fetch("/user/profile", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (res.status === 201) return data.user;
        return null;
    };
    useEffect(async () => {
        const user = await getUser();
        setUser(user);
    }, []);
    return (
        <React.Fragment>
            <Router>
                <Navbar user={user} />
                <Routes>
                    <Route
                        path="/user/login"
                        element={
                            user ? <Navigate to="/user/profile" /> : <Login />
                        }
                    />
                    <Route
                        path="/user/signup"
                        element={
                            user ? (
                                <Navigate to="/user/profile" />
                            ) : (
                                <Register />
                            )
                        }
                    />
                    <Route path="/user/profile" element={<DashBoard />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
