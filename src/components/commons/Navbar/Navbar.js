import React from "react";
import { Header, HeaderMenuItem } from "carbon-components-react";
import { Home24 } from "@carbon/icons-react";
import { HiOutlineLogout } from "react-icons/hi";
import "./Navbar.scss";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/visits");
  };

  const userLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <Header
      data-testid="navbar-container"
      className="header__container"
      aria-label="portal-header"
    >
      {user ? (
        <>
          <HeaderMenuItem className="header__icon">
            <Home24 onClick={() => navigateHome()} />
          </HeaderMenuItem>
          <HeaderMenuItem className="header__icon" onClick={() => userLogout()}>
            <HiOutlineLogout />
            <span>Logout</span>
          </HeaderMenuItem>
        </>
      ) : null}
    </Header>
  );
};

export default Navbar;
