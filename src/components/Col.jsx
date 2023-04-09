import React from "react";
import styled from "styled-components";

const Colume = styled.div`
  display: flex;
  flex-direction: column;
`;

function Col({ children }) {
  return <Colume>{children}</Colume>;
}

export default Col;
