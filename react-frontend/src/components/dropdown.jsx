import React, { Component } from "react";
import {Link, useNavigate} from 'react-router-dom';

class Dropdown extends Component {
    state = {
        show: false,
    };
    HandleLeave = () => {
        this.setState({ show: false });
    };
    HandleClick = () => {
        let cshow = this.state.show;
        let show = !cshow;
        this.setState({ show });
    };
    Logout = async () =>{
        const res = await fetch("/user/logout");
        const data = await res.json();
        if(res.status === 200){
            window.alert(data.msg);
            window.location = "/user/login";
        }else{
            window.alert(data.error);
        }
    }
    render() {
        let cn =
            this.state.show === true
                ? "dropdown-menu dropdown-menu-end show"
                : "dropdown-menu dropdown-menu-end";
        let cn1 =
            this.state.show === true
                ? "fa fa-user fa-2x"
                : "fa fa-user-o fa-2x";
        return (
            <div className="dropdown">
                <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    onClick={this.HandleClick}
                    aria-expanded="false"
                >
                    <i className={cn1}></i>
                </button>
                <ul
                    className={cn}
                    aria-labelledby="dropdownMenuButton1"
                    onMouseLeave={this.HandleLeave}
                >
                    <li>
                        <Link className="dropdown-item" to="/user/profile">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <a onClick={this.Logout} className="dropdown-item">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Dropdown;
