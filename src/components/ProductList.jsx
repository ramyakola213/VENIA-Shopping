
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
                        <Skeleton className="skeleton-card" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" />
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3">
                        <Skeleton className="skeleton-card" />
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
                                 <div className="aem-Grid aem-Grid--12">
                                       
                                       <div  className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                             <p> Clothing / Women / Outwear</p>
                                       </div>
                                       <div  className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                             <p><b>25 Results</b></p>
                                       </div>
                                       <div  className="aem-GridColumn aem-GridColumn--default--3 filter-input">
                                       <select class="sort"><option value="Latest"  onClick={()=>filterProduct("women's clothing")}> Latest</option>
                                       <option value="old"  onClick={()=> filterProduct("men's clothing")}> New</option><option value="old"  onClick={()=>filterProduct("jewelery")}> Old</option></select>
                                       </div>
                                   </div>
                       <div className="aem-GridColumn aem-GridColumn--default--3">  
                         <div className="sidebar">
                             Filters
                             <hr></hr>  
                             Categories        
                         <ul data-accordion className="categories cat"> 
                          <li  onClick={()=>filterProduct("women's clothing")}><input type="checkbox" id="high" /> Women's Collection </li>
                          <li  onClick={()=> filterProduct("men's clothing")}><input type="checkbox" id="low" /> Men's collection </li>
                          <li  onClick={()=>filterProduct("jewelery")} ><input type="checkbox" id="boots"/> Jewelery</li>
                          <li  onClick={()=>filterProduct("electronics")}><input type="checkbox" id="all" /> Electronics</li>
                         </ul>
                         <hr></hr>
                          Brands

                         <ul data-accordion className="categories"> 
                          <li ><input type="checkbox" id="all" onClick={ ()=>setFilter(data)  }/>   All </li>
                          <li ><input type="checkbox" id="high" onClick={()=>filterProduct("women's clothing")}/> Avasa</li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Levi's </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Allen Solly</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Wrangler</li>
                         </ul>
                         <hr></hr>
                         <p>Colors</p>
                         <ul data-accordion className="categories colors"> 
                          <li ><button className="pink"></button>   </li>
                          <li ><button className="blue"></button>     </li>
                          <li ><button className="black"></button>    </li><br/>
                          <li ><button className="green"></button>    </li>
                          <li ><button className="white" ></button></li>
                          <li ><button className="yellow"></button></li><br/>
                          
                          <li ><button className="grr"></button>    </li>
                          <li ><button className="red" type="checkbox"></button>     </li>
                         </ul>
                         <hr></hr>
                         <p>Size</p>
                         <ul data-accordion className="categories"> 
                          <li ><input type="checkbox" id="all" onClick={ ()=>setFilter(data)  }/>   All </li>
                          <li ><input type="checkbox" id="high" onClick={()=>filterProduct("women's clothing")}/> X-Small</li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Small</li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Medium</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Large</li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> X-Large </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> XXX</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Electronics</li>
                          <li ><input type="checkbox" id="low" onClick={()=> filterProduct("men's clothing")}/> Large </li>
                          <li ><input type="checkbox" id="boots" onClick={()=>filterProduct("jewelery")}/> Small</li>
                          <li ><input type="checkbox" id="all" onClick={()=>filterProduct("electronics")}/> Extra Large</li>
                         </ul>
                         <hr></hr>
                         </div>
                        </div>


                                {filter.map((product) => {
                                                return (
                                                        <>        <div>
                                                      
                                                           
                                                       </div>
                                                          
                                                               <div className="product-card aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--4" >
                                                               <NavLink to={`/products/${product.id}`}> 
                                                                        <div className="card-img">
                                                                            <img src={product.image} className="card-img-top" alt={product.title} />
                                                                        </div> 
                                                                                
                                                                          <h5 className="">{product.title.substring(0,20) }</h5>
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
               
                      <div className="aem-Grid aem-Grid--12">
                             
                             { loading ? <Loading /> : <ShowProductList /> }
                 
                      </div>
                   </div>
                </div>
        );
}

export default ProductList;