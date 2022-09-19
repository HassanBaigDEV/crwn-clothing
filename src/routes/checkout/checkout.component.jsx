import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { selectCartItems, selectCartCount } from "../../store/cart/cartSelector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems); 
  const total = useSelector(selectCartCount);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">Product</div>
        <div className="header-block">Description</div>
        <div className="header-block">Quantity</div>
        <div className="header-block">Price</div>
        <div className="header-block"></div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total:${total}</span>
    </div>
  );
};
export default Checkout;
