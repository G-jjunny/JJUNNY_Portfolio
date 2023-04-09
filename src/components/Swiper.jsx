import React from "react";
import styled from "styled-components";
import MainTheme from "./MainTheme";

// scrollMagic으로 scroll이벤트

const SectionWipesStyled = styled.div`
  overflow: hidden;
  background-color: var(--main-color);
  .panel {
    height: 100vh;
    width: 100vw;
    /* text-align: center; */
  }

  .panel.main {
    display: flex;
    margin-bottom: 500px;
    justify-content: center;
  }
  .panel.info {
    display: flex;
    margin-bottom: 800px;
  }
  .panel.project {
    display: flex;
    margin-bottom: 800px;
  }

  .panel.contact {
    display: flex;
    margin-bottom: 300px;
  }
`;

const SectionWipes = ({ children }) => (
  <>
    <SectionWipesStyled>{children}</SectionWipesStyled>
    <MainTheme />
  </>
);

export default SectionWipes;
