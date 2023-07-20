import React, { useState } from "react";
import {
  Header,
  HeaderName,
  HeaderMenuItem,
  HeaderNavigation,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderMenuButton,
  SkipToContent,
} from "carbon-components-react";
import { Home24 } from "@carbon/icons-react";
import "./Navbar.scss";

const Navbar = () => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const onClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
  };

  return (
    <Header
      data-testid="navbar-container"
      className="header__container"
      aria-label="portal-header"
    >
      <SkipToContent />
      <HeaderMenuButton
        className="sidebar__icon"
        aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
        onClick={onClickSideNavExpand}
        isActive={isSideNavExpanded}
        aria-expanded={isSideNavExpanded}
      />
      <HeaderName className="header__icon" href="/" prefix="">
        <Home24 />
      </HeaderName>
      <HeaderNavigation
        className="header__navlinks"
        aria-label="portal-navigation"
      >
        <HeaderMenuItem className="header__item" href="/">
          FAQ
        </HeaderMenuItem>
        <HeaderMenuItem className="header__item" href="/">
          Contact
        </HeaderMenuItem>
      </HeaderNavigation>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        isPersistent={false}
      >
        <SideNavItems>
          <HeaderSideNavItems>
            <HeaderMenuItem className="header__item" href="/">
              FAQ
            </HeaderMenuItem>
            <HeaderMenuItem className="header__item" href="/">
              Contact
            </HeaderMenuItem>
          </HeaderSideNavItems>
        </SideNavItems>
      </SideNav>
    </Header>
  );
};

export default Navbar;
