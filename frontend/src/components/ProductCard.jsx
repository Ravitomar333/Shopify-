import React from 'react';
import {Link} from "react-router-dom";
import "../styles/product.css";
import placeholderImage from "../assets/product-placeholder.svg";

const productCard = ({product}) =>{
    return(

        <div className="product-card">
            
            <img
                src={product.imageUrl || placeholderImage}
                alt={product.name}
                className="product-image"
                onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = placeholderImage;
                }}
            />
            <div className="product-info">
                 <h3 className='product-name'> {product.name}</h3>
                <p className='product-price'>${product.price.toFixed(2)}</p>
                <Link to ={`/product/${product._id}`} className= "product-link">View Details </Link>

            </div>
           
        </div>
        
    )
};

export default productCard;
