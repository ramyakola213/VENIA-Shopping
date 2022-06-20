
import React, { useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
// import ReactPaginate from 'react-paginate';
import heart from '../assets/heart.svg';
import "react-loading-skeleton/dist/skeleton.css";
import Breadcrum from "./Breadcrum";
import {NavLink} from "react-router-dom";
import ProductDetails from "./ProductDetails";



const ProductList = ()=>{


        const [data, setData] = useState([]);
        const [filter, setFilter] = useState(data);
        const [loading, setLoading] = useState(false);
        let componentMounted = true;

        useEffect(() => {

                const getProducts = async () => {
                        setLoading(true);
                        const response = await fetch("https://fakestoreapi.com/products");
                        if (componentMounted) {
                                setData(await response.clone().json());
                                setFilter(await response.json());
                                setLoading(false);
                                console.log(filter);


                        }
                        return () => {
                                componentMounted = false;
                        }
                }

                getProducts();

        }, []);

        const Loading = () => {
                return (
                        <>
                        <div className="aem-GridColumn aem-GridColumn--default--3 ">
                                <Skeleton  height={800} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" width={200} height={350} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" width={200} height={350} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" width={200} height={350} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" width={200} height={350} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" width={200} height={350} />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" width={200} height={350} />
                        </div>
                        
                     
                        </>


                )
        }


        const filterProduct =(cat)=>{
                const updatedList = data.filter((x)=>x.category == cat);
                setFilter(updatedList);

        }


        const ShowProductList = () => {
                return (
                        <>
                               
                       <div className="aem-GridColumn aem-GridColumn--default--3">  
                         <div className="sidebar">
                             Filters
                             <hr></hr>  
                             Attribute        
                         <ul data-accordion className="categories"> 
                          <li ><input type="checkbox" id="all" onClick={ ()=>setFilter(data)  }/>   All </li>
                          <li ><input type="checkbox" id="high" onClick={()=>filterProduct("women's clothing")}/> Women's Collection </li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Men's collection </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Jewelery</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Electronics</li>
                         </ul>
                         <hr></hr>
                         Attribute

                         <ul data-accordion className="categories"> 
                          <li ><input type="checkbox" id="all" onClick={ ()=>setFilter(data)  }/>   All </li>
                          <li ><input type="checkbox" id="high" onClick={()=>filterProduct("women's clothing")}/> Women's Collection </li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Men's collection </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Jewelery</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Electronics</li>
                         </ul>
                         <hr></hr>
                         <p>Attribute</p>
                         <ul data-accordion className="categories"> 
                          <li ><input type="checkbox" id="all" onClick={ ()=>setFilter(data)  }/>   All </li>
                          <li ><input type="checkbox" id="high" onClick={()=>filterProduct("women's clothing")}/> Women's Collection </li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Men's collection </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Jewelery</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Electronics</li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Men's collection </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Jewelery</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Electronics</li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Men's collection </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Jewelery</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Electronics</li>
                         </ul>
                         <hr></hr>
                         </div>
                        </div>


                                {filter.map((product) => {
                                                return (
                                                        <>   
                                                          
                                                               <div className="product-card aem-GridColumn aem-GridColumn--default--3" >
                                                               <NavLink to={`/products/${product.id}`}> 
                                                                        <div className="card-img">
                                                                            <img src={product.image} className="card-img-top" alt={product.title} />
                                                                        </div> 
                                                                                
                                                                          <h5 className="">{product.title.substring(0,25)}</h5>
                                                                            <h6 className=" "> ${product.price}</h6>
                                                                          <img src={heart} className="heart" alt="heart"/>
                                                                                      
                                                                                
                                                                </NavLink>       
                                                                </div>
                                                                
                                                        </>
                                                )
                                        })
                                }
                        </>

                )
        }


        return (

                <div className="product-list">
                    <div className="aem-Grid">
                    <Breadcrum></Breadcrum>
                      <div className="aem-Grid aem-Grid--12">
                             
                             { loading ? <Loading /> : <ShowProductList /> }
                 
                      </div>
                   </div>
                </div>
        );
}

export default ProductList;