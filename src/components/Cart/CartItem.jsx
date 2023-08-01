import React from "react"

import { useContext } from "react"
import "./CartItem.css"
import { CartContext } from "../../context/CartProvider"
import products from "../../productData"

const CartItem = (props) => {

    const { removeItem } = useContext(CartContext)


  

    return (        
        <li className="cart-item">
            <div className="cart-item-img">
                <img src={props.product.img} alt={props.product.name} />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-texts">
                    <b>{props.product.name}</b>
                    <div>
                        <span>{props.product.price}TL x </span>
                        <span>{props.product.amount}</span>
                    </div>
                </div>
                <a href="/" className="cart-item-remove" onClick={(e) => {
                    e.preventDefault()
                    removeItem(props.product.id)
                }}>X</a>
            </div>
        </li>
    )
}

export default CartItem