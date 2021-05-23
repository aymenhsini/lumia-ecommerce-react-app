import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import TableProduit from "./TableProduit";

function ProduitDetaille() {
  return (
    <ProductConsumer>
      {(value) => {
        const {
          id,
          name,
          category,
          price,
          detail,
          subs,
          entretienEtPlantation,
          caracteristiquesVegetales,
          botanique,
          img,
          inCart,
        } = value.detailProduct;

        return (
          <Main>
            <Container>
              <ProductImages>
                <ImageSlider img={img} />
              </ProductImages>
              <ProductInfo>
                <h1>{name}</h1>
                <p className="category">Catégorie: {category} </p>
                <p className="price">
                  <strong>Prix:</strong>
                  <span>{price} TnD</span>
                </p>
                <h6 className="subs">*{subs[0]} </h6>
                <h6 className="subs">*{subs[1]} </h6>
                <h6 className="subs">*{subs[2]} </h6>
                <p className="produit-detail">{detail} </p>
                <Link to="/">
                  <ButtonContainer>Retour aux Produits </ButtonContainer>
                </Link>
                <ButtonContainer
                  panier
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? "Produit dans le panier" : "Ajouter au panier"}
                </ButtonContainer>
              </ProductInfo>
            </Container>
            <TableProduit
              entretienEtPlantation={entretienEtPlantation}
              caraVegetale={caracteristiquesVegetales}
              botanique={botanique}
            />
          </Main>
        );
      }}
    </ProductConsumer>
  );
}

export default ProduitDetaille;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProductImages = styled.div``;
const ProductInfo = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  flex: 1;
  > h1 {
    font-size: 38px;
    text-transform: capitalize;
    margin-bottom: 15px;
  }
  > .category {
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 15px;
  }
  > .price {
    font-size: 25px;
    margin-left: 20px;
    color: #f68b1e;
    > span {
      padding-left: 5px;
    }
  }
  > .produit-detail {
    font-size: 18px;
    word-spacing: 0.2em;
    margin-top: 15px;
    line-height: 25px;
  }
  > .subs {
    font-size: 15px;
    padding: 8px;
  }
`;
const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #f68b1e;
  border-color: ${(props) => (props.panier ? "blue" : "#f68b1e")};
  color: ${(props) => (props.panier ? "blue" : "#f68b1e")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  :hover {
    background: ${(props) => (props.panier ? "blue" : "#f68b1e")};
    color: white;
  }
  :focus {
    outline: none;
  }
`;
