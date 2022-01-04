import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        if (res.status === 200) return res.user;
        return null;
    };
    useEffect(() => {
        const user = getUser();
        setUser(user);
    }, []);
    return (
        <React.Fragment>
            <Router>
                <Navbar user={user} />
                <Routes>
                    <Route path="/user/login" element={<Login />} />
                    <Route path="/user/signup" element={<Register />} />
                    <Route path="/user/profile" element={<DashBoard />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
