import React from "react";
import styled from "styled-components";
function CartEmpty() {
  return (
    <Container>
      <h1>Votre Panier est actuellement vide !</h1>
    </Container>
  );
}

export default CartEmpty;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;
  color: Gray;
  text-transform: capitalize;
`;
