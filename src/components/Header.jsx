import React from "react";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import {NavLink} from "react-router-dom";



const Header = ()=>{
        return (

              
        <header>
                
                
                 <i className="fas fa-bars dropdown">
                     <div className="dropdown-content">
                       <h4 className="logo"> <NavLink to="/">V E N I A </NavLink></h4>
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                     </div>
                </i>

                <nav>
                     <h4 className="logo">V E N I A</h4>   
                     <ul>
                     <li><NavLink to="/" > Home </NavLink></li>
                        <li><NavLink to="/ProductList" > Women </NavLink></li>
                        <li> <NavLink to="/men's clothing" >Men </NavLink></li>
                        <li> <NavLink to="/" >Smart Gear </NavLink></li>
                        
                     </ul>
                     <ul>
                        <li> <NavLink to="/login" ><img src={search} alt="search" className="icon-img"/>Search </NavLink></li>
                        <li> <NavLink to="/login" ><img src={user} alt="user" className="icon-img"/>Sign in </NavLink></li>
                        <li> <NavLink to="/login" >Cart </NavLink></li>
                     </ul>                
                </nav>
        
        </header>

                
        )
}

export default Header;