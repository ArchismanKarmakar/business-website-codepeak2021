import React, { Component } from "react";

class Dropdown extends Component {
    render() {
        return (
            <div class="dropdown">
                <button
                    class="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="fa fa-user fa-2x"></i>
                </button>
                <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                        <a class="dropdown-item" href="#">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Dropdown;
