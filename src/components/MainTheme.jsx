import React from "react";
import styled from "styled-components";

const Bg = styled.div`
  position: relative;

  .top {
    position: fixed;
    top: 40px;
    right: 40px;
    /* color: var(--main-white); */
  }
  .right {
    color: var(--main-white);
    top: 0;
    margin: 15px 0;
    font-size: 20px;
    right: 60px;
    top: 40px;
    transform: rotate(-90deg);
    transform-origin: top right;
    white-space: nowrap;
    position: fixed;
  }
  .top::after {
    content: "";
    display: block;
    width: 40vw;
    height: 3px;
    background-color: var(--main-white);
    /* background-color: var(--bright); */
  }
  .bottom {
    position: fixed;
    bottom: 40px;
    left: 40px;
  }
  .bottom::after {
    content: "";
    display: block;
    width: 45vw;
    height: 3px;
    background-color: var(--main-white);
  }
  .left {
    position: fixed;
    bottom: 40px;
    left: 40px;
  }
  .left::after {
    content: "";
    display: block;
    width: 3px;
    height: 100px;
    background-color: var(--main-white);
  }

  @media screen and (max-width: 768px) {
    .top {
      top: 10px;
      right: 10px;
    }
    .right {
      font-size: 18px;
      margin: 10px -8px;
    }
    .bottom {
      left: 10px;
      bottom: 10px;
    }
  }
`;

function MainTheme({ children }) {
  return (
    <Bg>
      <div className="top animate__animated animate__slideInLeft"></div>
      <div className="right">
        <p className="animate__animated animate__slideInLeft">
          Junior Frontend Developer
        </p>
      </div>
      <div className="bottom animate__animated animate__slideInRight"></div>
      <div className="left animate__animated animate__slideInDown"></div>
      {children}
    </Bg>
  );
}

export default MainTheme;
