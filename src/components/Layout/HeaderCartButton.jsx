import { useContext } from "react"
import { CartContext } from "../../context/CartProvider"
import CartIcon from "../Cart/CartIcon"
import "./HeaderCartButton.css" 
import React from "react"


const HeaderCartButton = ({onShowCart}) => {
 const cartCtx  = useContext (CartContext)
 
 const totalItemsInCart = cartCtx.items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount
 }, 0)

    return (
        <button className="button" onClick={onShowCart}>
            <span className="icon">
                <CartIcon/>
               
            </span>
            <span>
                Sepetim
            </span>
            <span className="badge" id="cart-item-count">
                {totalItemsInCart}
            </span>
        </button>
    )
}

export default HeaderCartButton