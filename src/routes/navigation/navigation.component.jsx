import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../context/cart.context";
import { useSelector } from "react-redux";


import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser)

  return (
    <React.Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </React.Fragment>
  );
};

export default Navigation;
