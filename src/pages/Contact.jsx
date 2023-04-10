import React, { useEffect, useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
  width: 100%;
  padding: 150px 100px;
  color: var(--main-white);
  transition: 1s;
  opacity: ${({ isLast }) => (isLast ? "1" : "0")};
  .outTro {
    position: relative;
    max-width: 650px;
    margin-bottom: 50px;
    p {
      margin-bottom: 20px;
      font-weight: 400;
    }
    .bold {
      font-weight: 600;
      color: var(--bright);
    }
  }
  .outTro::after {
    content: "";
    display: block;
    width: 200px;
    height: 2px;
    background-color: var(--main-white);
    position: absolute;
    right: 0;
  }
  .contact {
    .icon-group {
      align-items: center;
      color: var(--main-white);
      margin: 20px 0;
      display: flex;

      button {
        background-color: inherit;
        border: 0;
        transition: 0.5s;
        padding: 0;
        margin-left: 5px;
        .icon {
          font-size: 40px;
          cursor: pointer;
          color: var(--main-white);
          margin-right: 20px;
        }
      }
      button:hover {
        /* background-color: var(--secondary); */
        color: var(--secondary);
        transition: 0.5s;
        .icon {
          animation: shake 0.25s;
          color: var(--bright);
        }
      }
    }
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

function Contact() {
  const [isLast, setIsLast] = useState(false);
  const animate = useSelector((state) => state.animate);
  useEffect(() => {
    if (animate === "last") {
      setIsLast(true);
    } else {
      setIsLast(false);
    }
  }, [animate]);

  return (
    <StyledDiv isLast={isLast}>
      <div className="outTro">
        <p>
          안녕하세요 주니어프론트엔드 개발자{" "}
          <span className="bold">정경준</span>입니다!
        </p>
        <p>
          저는 학습한 기술을 바탕으로 더욱 전문성을 키워 새로운 기술과 트렌드에
          대한 열린 마음으로 접근하며 프론트엔드 분야에서 전문적인 역량을 갖출
          수 있도록 노력하고 있습니다.
        </p>
        <p>
          또한, 협업하는 동료 개발자, 디자이너 및 기획자와의 커뮤니케이션
          능력으로 프로젝트의 성과를 극대화함으로써 사용자에게 더 나은 서비스를
          제공하고 기술적이며 인적으로 더욱 성장한 프론트엔드 개발자될 수 있도록
          노력하겠습니다.
        </p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <div className="icon-group">
          <a
            href="mailto:rudwns9551@naver.com"
            target="_BLANK"
            rel="noreferrer"
          >
            <button>
              <MailOutlineIcon className="icon" />
            </button>
          </a>
          <a href="tel:010-3185-9026" rel="noreferrer">
            <button>
              <PhoneIphoneIcon className="icon" />
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
        <h2>Github</h2>
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
        </div>
      </div>
    </StyledDiv>
  );
}

export default Contact;
