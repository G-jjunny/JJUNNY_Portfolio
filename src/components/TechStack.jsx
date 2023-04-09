import React from "react";
import styled from "styled-components";
import BadgeRow from "./BadgeRow";

const StyledDiv = styled.div`
  .head {
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

function TechStack() {
  return (
    <StyledDiv>
      <h3 className="head">기술스택</h3>
      <BadgeRow>
        <img
          src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          alt="html"
        />
        <img
          src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          alt="css"
        />
        <img
          src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
          alt="js"
        />
      </BadgeRow>
      <BadgeRow>
        <img
          src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
          alt="react"
        />
        <img
          src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"
          alt="redux"
        />
      </BadgeRow>
      <BadgeRow>
        <img
          src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"
          alt="nodejs"
        />
        <img
          src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
          alt="postman"
        />
      </BadgeRow>
      <BadgeRow>
        <img
          src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white"
          alt="sass"
        />
        <img
          src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
          alt="sty-comp"
        />
      </BadgeRow>
    </StyledDiv>
  );
}

export default TechStack;
