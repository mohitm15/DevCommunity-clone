import React from 'react'
import {FaDev} from 'react-icons/fa';
import {BiMessageRoundedCheck,} from 'react-icons/bi';
import {RiNotificationLine} from 'react-icons/ri';


const Navbar = () => {
    return (
        <header className="header">
            <div className="headerContainer">
                <a href="https://dev.to/" className="headerContainer_logo" >
                    <FaDev size="3.125rem"/>
                </a>
           
            <div className="headerContainer_searchBox">
                <form>
                    <input type="text" placeholder="Search..." aria-label="Search"/>
                </form>
            </div>

            <div className="headerContainer_right">
                <button>Write a Post</button>
                <i>
                    <BiMessageRoundedCheck />
                </i>
                <i>
                    <RiNotificationLine />
                </i>

                <span>
                    <img src="http://picsum.photos/311" alt="profile pic" />
                </span>
            </div>
                
            </div>
        </header>
    )
}

export default Navbar
