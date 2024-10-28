import React from 'react'
import { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { removeProduct } from '../slice/ProductSlice'


const Cart = () => {

  const cartItems = useSelector((state: RootState) => state.product.items)
  const dispatch = useDispatch();
  console.log(cartItems)
  
  return (
    <div>
      <div>Cart</div>
      <div className="product-group">
        {cartItems.map((item, index) => (
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
            <button
              className="add-to-cart-btn"
              onClick={() => dispatch(removeProduct(item.id))}
            >
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart