import React from "react";
import styled from "styled-components";

function TableProduit({ entretienEtPlantation, caraVegetale, botanique }) {
  return (
    <Tableau>
      <CaracteristiquesProduit>
        <h1>Entretien & plantation</h1>
        <ul>
          {entretienEtPlantation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CaracteristiquesProduit>
      <CaracteristiquesProduit>
        <h1>Caracteristique vegetale</h1>
        <ul>
          {caraVegetale.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CaracteristiquesProduit>
      <CaracteristiquesProduit>
        <h1>Botanique</h1>
        <ul>
          {botanique.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </CaracteristiquesProduit>
    </Tableau>
  );
}

export default TableProduit;

const Tableau = styled.div`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  flex: 1;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CaracteristiquesProduit = styled.div`
  width: 32%;
  text-align: center;
  background-color: #ebebe0;
  @media (max-width: 768px) {
    width: 90vw;
  }
  > h1 {
    height: 100px;
    background-color: #d6d6c2;
  }
  > ul > li {
    list-style: none;
    font-size: 18px;
    padding: 5px;
  }
`;
