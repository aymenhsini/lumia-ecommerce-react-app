import React from "react";
import styled from "styled-components";
import logo from "./static/lumia_logo.png";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { ProductConsumer } from "./context";

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </Link>

      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          return (
            <HeaderIcons>
              <HeaderIcon>
                <HelpOutlineIcon /> <p>Aide</p>
              </HeaderIcon>
              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "black" }}
              >
                <HeaderIcon>
                  <Badge
                    badgeContent={cart.length}
                    color="primary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                  Panier
                </HeaderIcon>
              </Link>
            </HeaderIcons>
          );
        }}
      </ProductConsumer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  opacity: 1;
  z-index: 999;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;
const Logo = styled.div`
  padding: 8px;
  flex: 0.15;
  > img {
    height: 32px;
    width: 139px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  right: 2vw;
  position: absolute;
`;
const HeaderIcon = styled.div`
  display: flex;
  margin: 5px;
  padding-top: 10px;
  cursor: pointer;
  :hover {
    color: #f68b1e;
  }
`;
