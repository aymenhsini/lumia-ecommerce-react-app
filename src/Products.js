import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "./context";
import Produit from "./Components/Produit";

export default class Products extends Component {
  render() {
    return (
      <Container>
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return <Produit key={product.id} product={product} />;
            });
          }}
        </ProductConsumer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
