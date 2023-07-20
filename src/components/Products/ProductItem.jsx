import "./ProductItem.css"
import Card from "../UI/Card"
import Rating from "./Rating"
import { useContext } from "react"
import { CartContext } from "../../context/CartProvider"

const ProductItem = ({product}) => {
    const {name, description , img , price} = product
  const { items, addItem, totalAmount} = useContext(CartContext)
 
    return (
        <Card>
            <img src={img} alt={name} />
            <h3 className="product-title">{name}</h3>
            <p>{description}</p>
            <div className="product-info">
                <Rating/>
                <span className="price">{price}TL</span>
            </div>
            <button className="add-to-cart" onClick={ ()=>addItem(product)}>Sepete Ekle</button>
        </Card>
    )
}

export default ProductItem