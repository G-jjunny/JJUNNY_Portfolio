import React from "react";
import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
`;

function Row({ children }) {
  return <FlexRow>{children}</FlexRow>;
}

export default Row;
