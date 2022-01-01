import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './DashBoard.module.css';

const DashBoard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ firstName: '', lastName: '', birthday: '', address1: '', address2: '', country: '', phone: '' })
    const handleInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    const countries = ['Australia', 'England', 'India', 'Pakistan', 'South Africa']

    const fetchData = async () => {
        const res = await fetch("/user/profile");
        const data = await res.json();
        if (res.status === 201) {
            setUser(data.user);
        } else if (res.status === 401) {
            navigate('/user/login');
        } else {
            window.alert(data.error);
        }
    }

    const formSubmit = async () => {
        const res = await fetch('/user/profile', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });
        const data = await res.json();
        if (res.status === 201) {
            window.alert(data.msg);
        } else {
            window.alert(data.error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className={classes['dashboard-container']}>
            <div className={classes["dashboard-banner"]}>
                <div className={classes["user-info-container"]}>
                    <div className={classes["user-info-card"]}>
                        <h2>Welcome Back</h2>
                        <h4>{user.firstName} {user.lastName}</h4>
                        <h4>Email - {user.email}</h4>
                    </div>
                </div>
            </div>
            <div className={classes["profile-edit-container"]}>
                <div className={classes["profile-edit-card"]}>
                    <div className={classes["profile-header"]}>
                        <h1>Personal Information</h1>
                        <div className={classes["edit-btn"]}>
                            <button onClick={formSubmit}>Update</button>
                        </div>
                    </div>
                    <div className={classes["col"]}>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>first Name</div>
                            <input type="text" placeholder='First Name' name="firstName" onChange={handleInput} value={user.firstName} />
                        </div>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>last Name</div>
                            <input type="text" placeholder='Last Name' name="lastName" onChange={handleInput} value={user.lastName} />
                        </div>
                    </div>
                    <div className={classes["col"]}>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>birthday</div>
                            <input type="date" placeholder='Select date' name="birthday" onChange={handleInput} value={user.birthday} />
                        </div>
                    </div>
                    <div className={classes["col"]}>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>address line 1</div>
                            <input type="text" placeholder='Enter Address' name="address1" onChange={handleInput} value={user.address1} />
                        </div>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>address line 2</div>
                            <input type="text" placeholder='Enter Address' name="address2" onChange={handleInput} value={user.address2} />
                        </div>
                    </div>
                    <div className={classes["col"]}>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>country</div>
                            <select name="country" onChange={handleInput}>
                                <option value="" selected={user.country === 'Your location'}>Select Country</option>
                                {countries.map((country, index) => (
                                    <option key={index} value={country} selected={user.country === country}>{country}</option>
                                ))}
                            </select>
                        </div>
                        <div className={classes["type-1"]}>
                            <div className={classes["col-placeholder"]}>phone</div>
                            <input type="text" placeholder='Enter Number' name="phone" onChange={handleInput} value={user.phone} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard
