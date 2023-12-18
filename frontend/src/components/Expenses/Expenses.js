import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";
function Expenses() {
  return (
    <ExpensesStyled>
      <InnerLayout>Expenses</InnerLayout>
    </ExpensesStyled>
  );
}

const ExpensesStyled = styled.div``;

export default Expenses;
