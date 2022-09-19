import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { selectCartItems } from "../../store/cart/cartSelector";
import {
  addItemToCart,
  removeItemFromCart,
  removeFullItemFromCart,
} from "../../store/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  // const {
  //   addItemToCart,
  //   removeItemFromCart,
  //   removeFullItemFromCart,
  // } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const leftArrowHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  const rightArrowHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };

  const removeItemHandler = () => {
    dispatch(removeFullItemFromCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={leftArrowHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={rightArrowHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
