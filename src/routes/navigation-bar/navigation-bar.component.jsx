import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { selectIsCartOpen } from "../../store/cart/cartSelector";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../utilities/firebase/firebase.utility";
import { selectCurrentUser } from "../../store/user/userSelector";

import Carticon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useSelector(selectIsCartOpen);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <Carticon />
        </div>
        {isCartOpen ? <CartDropdown /> : null}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
