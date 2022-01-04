import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// Auth
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashBoard from "./user/DashBoard";
import Navbar from "./components/navbar";
function App() {
    const [user, setUser] = useState(null);
    const getUser = async () => {
        const user = await fetch("/user/profile", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        return user;
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
                </Routes>
            </Router>
        </React.Fragment>
    );
}

export default App;
