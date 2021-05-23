import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <ProductConsumer>
      {(value) => {
        const { modalOpen, closeModal } = value;
        const { img, name, price } = value.modalProduct;

        if (!modalOpen) {
          return null;
        } else {
          return (
            <ModalContainer>
              <ProductContainer>
                <h5>Le produit a été ajouté à votre panier</h5>
                <img src={img[0]} alt="" />
                <h6>{name}</h6>
                <p>
                  <strong> Prix:</strong> {price} TnD{" "}
                </p>
                <Link to="/">
                  <ButtonContainer
                    onClick={() => closeModal()}
                    className="btn-to-products"
                  >
                    Continuer Vos Achats
                  </ButtonContainer>
                </Link>
                <Link to="/Checkout">
                  <ButtonContainer
                    className="btn-to-basket"
                    panier
                    onClick={() => closeModal()}
                  >
                    Ouvrir Le Panier
                  </ButtonContainer>
                </Link>
              </ProductContainer>
            </ModalContainer>
          );
        }
      }}
    </ProductConsumer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: whitesmoke;
  margin: 15px;
  border-radius: 8px;
  width: 30%;
  height: 80%;
  > h5,
  h6 {
    margin: 5px 0 8px 0;
    font-size: 18px;
    text-transform: capitalize;
  }
  > img {
    width: 200px;
    height: 250px;
    border-radius: 10px;
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
