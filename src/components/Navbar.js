import React, { useState } from "react";
import { FaDev } from "react-icons/fa";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggle = () => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    };

    return (
        <header className="header">
            <div className="headerContainer">

            <div className="headerContainer_hamburgerMenu"></div>

                <a href="https://dev.to/" className="headerContainer_logo">
                    <FaDev size="3.125rem" />
                </a>

                <div className="headerContainer_searchBox">
                    <form>
                        <input type="text" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>

                <div className="headerContainer_right">
                    <button>Create Post</button>
                    <i className="hidden_search">
                        <FiSearch/>
                    </i>
                    <i>
                        <BiMessageRoundedCheck />
                    </i>
                    <i>
                        <RiNotificationLine />
                    </i>

                    <span onClick={toggle}>
                        <img src="http://picsum.photos/311" alt="profile pic" />
                    </span>
                </div>
            </div>

            <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
                <ul>
                    <li onClick={toggle}>
                        <a href="/profile">
                            <div className="u-name">Mohit Maroliya</div>
                            <small className="u-name-id">@mohitm15</small>
                        </a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/dashboard">Dashboard</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/post">Create a Post</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/list">Reading List</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/settings">Settings</a>
                    </li>
                    <li onClick={toggle}>
                        <a href="/signout">Sign Out</a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
