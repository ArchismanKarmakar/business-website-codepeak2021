import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import styles from "./Auth.module.css";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const handleLoginInput = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });
    const userLogin = async () => {
        const res = await fetch("/user/login", {
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
        <div className={styles["form-wrapper"]}>
            <div className={styles["form-container"]}>
                <div className={styles["form-logo"]}>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <div className={styles["form-fields"]}>
                        <input
                            name="email"
                            type="text"
                            className={styles["form-control"]}
                            id="email"
                            placeholder="E-mail"
                            value={user.email}
                            onChange={handleLoginInput}
                        />
                    </div>
                    <div className={styles["form-fields"]}>
                        <input
                            name="password"
                            type="password"
                            className={styles["form-control"]}
                            id="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleLoginInput}
                        />
                    </div>
                    <button onClick={userLogin} className={styles["btn-account"]}>
                        Submit
                    </button>
                </div>
                <div className={styles["account-toggle"]}>
                    <p>No account?</p>
                    <Link to="/user/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
