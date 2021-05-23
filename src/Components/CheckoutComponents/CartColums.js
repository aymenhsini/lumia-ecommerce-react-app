import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";

function CartColums() {
  return (
    <div style={{ paddingTop: 10, paddingBottom: 10 }}>
      <ProduitsColums container spacing={0}>
        <Grid item sm>
          <ColumTitle>Produits</ColumTitle>
        </Grid>
        <Grid item sm>
          <ColumTitle style={{ background: "lightgray" }}>
            Nom du produit
          </ColumTitle>
        </Grid>
        <Grid item sm>
          <ColumTitle>Prix</ColumTitle>
        </Grid>
        <Grid item sm>
          <ColumTitle style={{ background: "lightgray" }}>quantité</ColumTitle>
        </Grid>
        <Grid item sm>
          <ColumTitle>efacer</ColumTitle>
        </Grid>
        <Grid item sm>
          <ColumTitle style={{ background: "lightgray" }}>Total</ColumTitle>
        </Grid>
      </ProduitsColums>
    </div>
  );
}

export default CartColums;

const ProduitsColums = styled(Grid)``;
const ColumTitle = styled(Paper)`
  text-align: center;
  text-transform: capitalize;
  font-weight: 700;
`;
