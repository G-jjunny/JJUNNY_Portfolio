import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Col from "./Col";

const Edu = styled.div`
  overflow: hidden;
  margin-right: 40px;
  transition: 1s;

  /* opacity: ${({ isToggle }) => (isToggle ? "0" : "1")}; */
  /* display: ${({ isToggle }) => (isToggle ? "none" : "")}; */
  .head {
    /* font-size: 24px; */
    font-weight: 700;
  }
  .head::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--main-color);
    margin-top: 10px;
  }
  li {
    margin-top: 10px;
    list-style: none;
    font-weight: 600;
    /* color: var(--secondary); */
    color: var(--main-color);
  }
`;

function Education({ isToggle }) {
  const [isSecond, setIsSecond] = useState(false);
  const action = useSelector((state) => state.animate);

  useEffect(() => {
    if (action === "second") {
      setIsSecond(true);
    } else {
      setIsSecond(false);
    }
  }, [action]);

  return (
    <Edu
      isToggle={isToggle}
      className={`${
        isSecond
          ? "animate__animated animate__fadeInDown"
          : "animate__animated animate__fadeOut"
      }`}
    >
      <Col>
        <h3 className="head">학력사항</h3>
        <li>
          <p>2017 부흥고등학교 졸업</p>
        </li>
        <li>
          <p>2017 세명대학교 입학</p>
        </li>
        <li>
          <p>2023 세명대학교 졸업</p>
        </li>
      </Col>
    </Edu>
  );
}

export default Education;
