export const addCart = (product)=>{
        return {
                type: "ADDITEM",
                payload : product
        }
}
//Delete from cart
export const delCart = (product)=>{
        return {
                type: "DELITEM",
                payload : product
        }
}