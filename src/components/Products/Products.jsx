import "./Products.css"
import products from "../../productData"
import ProductItem from "./ProductItem"
import React from "react"



const Products = () => {
    const productList = products.map((product) => 
    <ProductItem key={product.id} product={product} />)
        

    return (
        <main className="products-wrapper">
            <ul className="products">{productList}</ul>
        </main>
    )
}

export default Products