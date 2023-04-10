import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import "animate.css";
import TypingAnimation from "../hooks/TypingAnimation";

const Intro = styled.div`
  font-weight: 600;
  color: var(--main-white);
  width: 100%;
  margin: auto 40px;
  z-index: 1;
  .text {
    text-align: center;
    position: relative;
  }
  .animate {
  }
  .text::before,
  .text::after {
    content: "";
    display: block;
    position: absolute;
    width: 0;
    height: 3px;
    background-color: var(--main-white);
    transition: width 1s ease-in-out;
  }

  .text::before {
    right: 0;
    top: -5px;
    transform-origin: right center;
  }

  .text::after {
    left: 0;
    bottom: -5px;
    transform-origin: left center;
  }

  .text.animate::before {
    width: 50%;
  }
  .text.animate::after {
    width: 50%;
  }
`;

function Main() {
  const [isTop, setIsTop] = useState(true);
  const animate = useSelector((state) => state.animate);

  useEffect(() => {
    if (animate === "first" || animate === "") {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  }, [animate]);
  const [showPortfolio, setShowPortfolio] = useState(false);

  const handleWelcomeComplete = () => {
    setShowPortfolio(true);
  };

  return (
    <>
      <Intro>
        {/* <h1 className={`text ${isTop ? "animate" : ""}`}> */}
        <h1
          className={`text ${
            isTop
              ? "animate animate__animated animate__fadeIn"
              : "animate__animated animate__fadeOut"
          }`}
        >
          {/* <TypingAnimation text={`WELCOME TO JJUNNY`} />
          <TypingAnimation text={`PORTFOLIO`} /> */}
          <TypingAnimation
            text={`WELCOME TO JJUNNY`}
            delay={100}
            onComplete={handleWelcomeComplete}
          />
          {showPortfolio && (
            <TypingAnimation
              text={`PORTFOLIO`}
              delay={100}
              onComplete={handleWelcomeComplete}
            />
          )}
        </h1>
      </Intro>
    </>
  );
}

export default Main;
