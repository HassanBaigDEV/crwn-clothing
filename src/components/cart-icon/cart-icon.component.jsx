import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
// import { CartContext } from "../../contexts/cart.context";
// import { useContext } from "react";

import { useSelector, useDispatch } from "react-redux";

import { setIsCartOpen } from "../../store/cart/cartActions";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";
import "./cart-icon.styles.scss";

const Carticon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const CartClickHandler = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className="cart-icon-container " onClick={CartClickHandler}>
      <CartIcon className="cart-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};
export default Carticon;
