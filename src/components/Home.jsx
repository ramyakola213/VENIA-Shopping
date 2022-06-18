import React from "react";
import bg from "../assets/bg.jpg";
import ProductList from "./ProductList";
import Breadcrum from "./Breadcrum";


const Home = ()=>{
        return (

          <section className="container">

                <div className="aem-Grid aem-Grid--3 banner" >
                  <div className="aem-GridColumn aem-GridColumn--default--1 banner-left"> 
                     <h1>Women's</h1>
                 </div>
                 <div className="aem-GridColumn aem-GridColumn--default--2 banner-right">
                    <img src={bg}  width="100%" height="50%" alt="banner"/>
                 </div>                
                </div>
                <Breadcrum></Breadcrum>
                  <ProductList></ProductList>

          </section>
        );
}

export default Home;