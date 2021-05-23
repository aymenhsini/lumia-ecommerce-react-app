import React from "react";
import "./Produit.css";

import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

function Produit({ product }) {
  const { id, name, img, category, price, inCart } = product;
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <ProductConsumer>
            {(value) => (
              <div className="el-wrapper">
                <div className="box-up">
                  <img className="img" src={img[0]} alt="" />
                  <div className="img-info">
                    <div className="info-inner">
                      <span className="p-name">{name}</span>
                      <span className="p-company">Lumia</span>
                    </div>

                    <Link
                      to="/ProduitDetaille"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div
                        className="plus-info"
                        onClick={() => value.handleDetail(id)}
                      >
                        <button>plus d'info ..</button>
                      </div>
                    </Link>

                    <div className="a-category">
                      Catégorie : <span className="category">{category}</span>
                    </div>
                  </div>
                </div>
                <div className="box-down">
                  <div className="h-bg">
                    <div className="h-bg-inner"></div>
                  </div>
                  <div className="cart">
                    <span className="price">TnD {price}</span>
                    <button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      <span className="add-to-cart">
                        <span className="txt">
                          {inCart
                            ? "Produit dans le panier"
                            : "Ajouter au panier"}
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}

export default Produit;
