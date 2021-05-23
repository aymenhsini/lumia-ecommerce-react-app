import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DeleteIcon from "@material-ui/icons/Delete";

function CartItem({ item, value }) {
  const { id, name, img, price, total, count } = item;
  const { increment, decriment, removeItem } = value;
  return (
    <ProduitsColums container spacing={0}>
      <Grid item sm>
        <ColumTitle>
          <img src={img[0]} alt="" style={{ height: "100%" }} />
        </ColumTitle>
      </Grid>
      <Grid item sm>
        <ColumTitle style={{ background: "lightgray" }}>{name}</ColumTitle>
      </Grid>
      <Grid item sm>
        <ColumTitle>{price} TnD</ColumTitle>
      </Grid>
      <Grid item sm>
        <ColumTitle style={{ background: "lightgray" }}>
          <div className="qantite">
            <span className="btn" onClick={() => decriment(id)}>
              <ArrowDropDownIcon />
            </span>
            <span className="count">{count} </span>
            <span className="btn" onClick={() => increment(id)}>
              <ArrowDropUpIcon />
            </span>
          </div>
        </ColumTitle>
      </Grid>
      <Grid item sm>
        <ColumTitle>
          <div className="icon" onClick={() => removeItem(id)}>
            <DeleteIcon />
          </div>
        </ColumTitle>
      </Grid>
      <Grid item sm>
        <ColumTitle style={{ background: "lightgray" }}>{total}</ColumTitle>
      </Grid>
    </ProduitsColums>
  );
}

export default CartItem;

const ProduitsColums = styled(Grid)`
  padding: 2px;
`;
const ColumTitle = styled(Paper)`
  text-align: center;
  text-transform: capitalize;
  height: 90px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 2px;
  > .qantite {
    display: flex;
    > .count {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 1px;
      background: transparent;
      text-transform: capitalize;
      font-size: 20px;
      width: 1.5rem;
      height: 1.5rem;
      color: black;
      border-radius: 0;
      border: 0.1rem solid black;
    }
    > .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      background: transparent;
      text-transform: capitalize;
      font-size: 20px;
      width: 1.5rem;
      height: 1.5rem;
      color: black;
      border-radius: 0;
      border: 0.1rem solid black;
      cursor: pointer;
      :hover {
        background: black;
        color: white;
      }
    }
  }
  > .icon {
    color: #f68b1e;
    cursor: pointer;
    > .MuiSvgIcon-root {
      width: 40px;
      height: 40px;
    }
  }
`;
