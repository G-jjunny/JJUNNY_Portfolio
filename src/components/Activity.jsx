import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Col from "./Col";

const Act = styled.div`
  max-width: 300px;
  margin-right: 40px;
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
  }
`;

function Activity() {
  const [isSecond, setIsSecond] = useState(false);
  const animate = useSelector((state) => state.animate);

  useEffect(() => {
    if (animate === "second") {
      setIsSecond(true);
    } else {
      setIsSecond(false);
    }
  }, [animate]);
  return (
    <Act>
      <div
        className={`${
          isSecond
            ? "animate__animated animate__fadeInDown fadeindown-delay-1"
            : "animate__animated animate__fadeOut"
        }`}
      >
        <Col>
          <h3 className="head">활동내역</h3>
          <li>2022 졸업작품(커뮤니티 앱 제작)</li>
          <li>2022 졸업작품(세명대학교 빅데이터 활용 홍보용 웹페이지 제작)</li>
          <li>2022 신광자동차 공업사 홈페이지 제작</li>
        </Col>
      </div>
    </Act>
  );
}

export default Activity;
