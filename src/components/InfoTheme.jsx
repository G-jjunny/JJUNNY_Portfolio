import React from "react";
import styled from "styled-components";

const Acc = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  .right {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 200px;
    height: 3px;
    background-color: var(--secondary);
  }
`;

function InfoTheme() {
  return (
    <Acc>
      <div className="right"></div>
    </Acc>
  );
}

export default InfoTheme;
