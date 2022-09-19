import Button from "../button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from '../../store/cart/cartActions'
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from '../../store/cart/cartSelector'

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems,product));
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
