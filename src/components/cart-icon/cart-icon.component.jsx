import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

import "./cart-icon.styles.scss";

const Carticon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const CartClickHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="cart-icon-container " onClick={CartClickHandler}>
      <CartIcon className="cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default Carticon;
