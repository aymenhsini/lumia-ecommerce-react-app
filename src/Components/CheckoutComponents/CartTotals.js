import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div>
      <Container>
        <Link to="/">
          <ClearButton onClick={() => clearCart()}>vider le panier</ClearButton>
        </Link>
        <h5>
          <span>Total: </span> <strong>{cartSubtotal} TnD </strong>
        </h5>
        <h5>
          <span>Tax: </span> <strong>{cartTax} TnD </strong>
        </h5>
        <h5>
          <span>total à payer: </span> <strong>{cartTotal} TnD </strong>
        </h5>
      </Container>
    </div>
  );
}

export default CartTotals;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: fixed;
  right: 10px;
  margin: 10px;
  > h5 {
    font-size: 20px;
    > span {
      text-transform: capitalize;
    }
  }
`;
const ClearButton = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 2px solid lightgray;
  color: red;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  :hover {
    background: red;
    color: white;
  }
  :focus {
    outline: none;
  }
`;
