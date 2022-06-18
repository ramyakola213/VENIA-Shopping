import React from "react";
import search from "../assets/search.svg";
import user from "../assets/user.svg";



const Header = ()=>{
        return (

              
        <header>
                
                
                 <i className="fas fa-bars dropdown">
                     <div className="dropdown-content">
                       <h4 className="logo">V E N I A</h4>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                     </div>
                </i>

                <nav>
                     <h4 className="logo">V E N I A</h4>   
                     <ul>
                        <li>Women</li>
                        <li>Men</li>
                        <li>Smart Gear</li>
                        <li>Accessories</li>
                     </ul>
                     <ul>
                        <li><img src={search} alt="search" class="icon-img"/>Search</li>
                        <li><img src={user} alt="user" class="icon-img"/>Sign in</li>
                        <li>Cart</li>
                     </ul>                
                </nav>
        
        </header>

                
        )
}

export default Header;