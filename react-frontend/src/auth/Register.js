import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.png";
import classes from "./Auth.module.css";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: "",
    });
    const handleInput = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });
    const userSignup = async () => {
        const res = await fetch("/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        });
        const data = await res.json();
        if (res.status === 200) {
            window.alert(data.msg);
            window.location = "/user/profile";
        } else {
            window.alert(data.error);
        }
    };
    return (
        <div className={classes["form-wrapper"]}>
            <div className={classes["form-container"]}>
                <div className={classes["form-logo"]}>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <div className={classes["form-fields"]}>
                        <input
                            name="username"
                            type="text"
                            className={classes["form-control"]}
                            id="name"
                            placeholder="Username"
                            autoComplete="off"
                            value={user.username}
                            onChange={handleInput}
                        />
                    </div>
                    <div className={classes["form-fields"]}>
                        <input
                            name="email"
                            type="email"
                            className={classes["form-control"]}
                            id="email"
                            placeholder="E-mail"
                            autoComplete="off"
                            value={user.email}
                            onChange={handleInput}
                        />
                    </div>
                    <div className={classes["form-fields"]}>
                        <input
                            name="password"
                            type="password"
                            className={classes["form-control"]}
                            id="password"
                            placeholder="Password"
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className={classes["form-fields"]}>
                        <input
                            name="cpassword"
                            type="password"
                            className={classes["form-control"]}
                            id="cpassword"
                            placeholder="Confirm Password"
                            autoComplete="off"
                            value={user.cpassword}
                            onChange={handleInput}
                        />
                    </div>
                    <button onClick={userSignup} className={classes["btn-account"]}>
                        Submit
                    </button>
                </div>
                <div className={classes["account-toggle"]}>
                    <p>Have an account?</p>
                    <Link to="/user/login">Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
