import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "../images/jjunny.jpg";
import Row from "../components/Row";
import Education from "../components/Education";
import Activity from "../components/Activity";
import InfoTheme from "../components/InfoTheme";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import TechStack from "../components/TechStack";

const InfoContainer = styled.div`
  position: relative;
  width: 70vw;
  max-width: 850px;
  min-height: 600px;
  margin: auto;
  background-color: var(--main-white);
  padding: 0 50px;
  transition: 1s;
  opacity: ${({ isSecond }) => (isSecond ? "1" : "0")};

  .container {
    /* width: 100%;
    height: 100%; */
    /* padding: 0 100px; */
  }
  a:visited {
    color: var(--main-color);
  }
  .icon-group {
    position: absolute;
    top: 25px;
    right: 25px;
    align-items: center;
    color: var(--main-color);
    button {
      border: 0;
      transition: 0.5s;
      padding: 0;
      margin-left: 5px;
      .icon {
        font-size: 40px;
        /* margin-left: 10px; */
        cursor: pointer;
      }
    }
    button:hover {
      /* background-color: var(--secondary); */
      color: var(--secondary);
      transition: 0.5s;
      animation: shake 0.25s;
    }
  }
  .name {
    display: flex;
    margin: 75px 0;
    /* align-items: flex-end; */
    align-items: center;
    position: relative;
    .face {
      /* width: 180px; */
      /* height: 240px; */
      width: 165px;
      height: 220px;
      /* border-radius: 10px; */
    }
    .t-group {
      display: flex;
      flex-direction: column;
      /* height: 240px; */
      margin-left: 30px;
      h3 {
        /* font-size: 24px; */
        font-weight: 600;
        .bold {
          font-weight: 700;
          color: var(--secondary);
        }
      }
      h2 {
        color: var(--secondary);
        /* font-size: 30px; */
        font-weight: 800;
      }
      .introduction {
        /* font-size: 18px; */
        max-width: 750px;
        padding-top: 20px;
        font-weight: 700;
      }
      .introduction::before {
        /* content: "";
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--main-color);
          margin-bottom: 20px; */
      }
    }
  }
  .name::before,
  .name::after {
    content: "";
    position: absolute;
    display: block;
    background-color: var(--main-color);
  }
  .name::before {
    width: 80px;
    height: 3px;
    top: -10px;
  }
  .name::after {
    width: 80px;
    height: 3px;
    bottom: -10px;
    left: 85px;
  }

  @keyframes shake {
    10% {
      transform: rotate(15deg);
    }
    20% {
      transform: rotate(-15deg);
    }
    30% {
      transform: rotate(15deg);
    }
    40% {
      transform: rotate(-15deg);
    }
  }
`;

export default function Info() {
  const [isSecond, setIsSecond] = useState(false);
  const animate = useSelector((state) => state.animate);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (animate === "second") {
      setIsSecond(true);
    } else {
      setIsSecond(false);
    }
  }, [animate]);

  const onClick = () => {
    setIsToggle(!isToggle);
    // console.log(isToggle);
  };

  return (
    <InfoContainer isSecond={isSecond}>
      {/* <InfoTheme /> */}
      <div className={`container`}>
        <div className="icon-group">
          <a
            href="https://github.com/G-jjunny"
            target="_BLANK"
            rel="noreferrer"
          >
            <button>
              <GitHubIcon className="icon" />
            </button>
          </a>
          <a
            href="https://instagram.com/g_jjunny?igshid=YmMyMTA2M2Y="
            target="_BLANK"
            rel="noreferrer"
          >
            <button>
              <InstagramIcon className="icon" />
            </button>
          </a>
        </div>
        <div className="name">
          <img src={Image} alt="img" className="face" />
          <div className="t-group">
            <h3>주니어 프론트엔드 개발자</h3>
            <h3>
              <span className="bold">정경준</span> 입니다.
            </h3>
            <h2>JUNG GYEONG JUN</h2>
            <p className="introduction">
              언제나 새롭고 부족한 부분에 있어서 배우는데 열정을 가지고 하루하루
              성장하며
              {/* 아직은 부족할 수 있는 저의 능력을 꾸준히 보완해 나가고
              있습니다. */}
              전문성을 지속적으로 발전시키고, 새로운 트렌드에 맞는 기술 대한
              열린 마음으로 접근하고 성장하는 주니어 프론트엔드 개발자
              정경준입니다.
            </p>
          </div>
        </div>
        <Row>
          <Education isToggle={isToggle} />
          <Activity isToggle={isToggle} />
          <TechStack isToggle={isToggle} />
          {/* <div className="stack">
            <IconButton onClick={onClick}>button</IconButton>
          </div> */}
        </Row>
      </div>
    </InfoContainer>
  );
}
