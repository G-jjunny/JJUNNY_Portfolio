import React from "react";
import styled from "styled-components";

const RowGap = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
`;

export default function BadgeRow({ children }) {
  return <RowGap>{children}</RowGap>;
}
