
import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

// import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const Cart = (props) => {
    const storeData = useSelector(state => state);

    // const handleUpdateCartQty = (lineItemId, quantity) => {
    //     commerce.cart.update(lineItemId, { quantity }).then((resp) => {
    //       setCart(resp.cart);
    //     }).catch((error) => {
    //       console.log('There was an error updating the cart items', error);
    //     });
    //   }

    const ItemsDetails = () => {
        return (
            <>
                <div>
                    {storeData && storeData.handleCart && storeData.handleCart.length > 0 ? storeData.handleCart.map((product) => {
                        return (
                            <>
                                <div className="product-card aem-GridColumn aem-GridColumn--default--3" >
                                    <div className="card-img">
                                        <img src={product.image} className="card-img-top" alt={product.title} />
                                    </div>
                                    {/* <button type="button" >-</button> */}
                                    <p>{product.qty}</p>
                                    {/* <button type="button" >+</button> */}
                                    <h5 className="">{product.title.substring(0, 25)}</h5>
                                    <h6 className=" "> ${product.price}</h6>
                                </div>

                            </>
                        )
                    }) : 'No Items in Cart to Display'
                    }
                </div>
            </>
        )
    }
    return (
        <div className="product-list">
            <div className="aem-Grid">
                {/* <Breadcrum></Breadcrum> */}
                <div className="aem-Grid aem-Grid--12">

                    {<ItemsDetails />}

                </div>
            </div>
        </div>
    )
}

export default Cart;