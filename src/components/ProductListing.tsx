import React, { useState } from "react";
import jsonData from "../assets/product.json";
import "../App.css";
import {
  useDispatch,useSelector
} from "react-redux";
import { RootState } from "../redux/store";
import { addProduct } from "../slice/ProductSlice";

const ProductListing = () => {

  const dispatch = useDispatch();

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    rating: number;
    stockQuantity: number;
  }

    const [product, setProduct] = useState<Product[]>(jsonData);
      const cartItems = useSelector((state: RootState) => state.product.items);
      console.log(cartItems);

  return (
    <div>
      <div>ProductListing</div>
      <div className="product-group">
        {product.map((item, index) => (
          <div className="product-card" key={index}>
            <h3 className="product-name">{item.name}</h3>
            <p className="product-description">{item.description}</p>
            <p className="product-category">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="product-rating">
              <strong>Rating:</strong> ⭐ {item.rating}
            </p>
            <p className="product-price">
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <p className="product-stock">
              {item.stockQuantity > 0
                ? `In Stock: ${item.stockQuantity}`
                : "Out of Stock"}
            </p>
            <button className="add-to-cart-btn" onClick={()=>dispatch(addProduct(item))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
