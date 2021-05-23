import React, { Component } from "react";
import styled from "styled-components";
import CartColums from "./Components/CheckoutComponents/CartColums";
import CartEmpty from "./Components/CheckoutComponents/CartEmpty";
import CartList from "./Components/CheckoutComponents/CartList";
import CartTotals from "./Components/CheckoutComponents/CartTotals";
import { ProductConsumer } from "./context";

export default class Checkout extends Component {
  render() {
    return (
      <Container>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <CartColums />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              );
            } else {
              return <CartEmpty />;
            }
          }}
        </ProductConsumer>
      </Container>
    );
  }
}
const Container = styled.div`
  margin: 15px;
`;
