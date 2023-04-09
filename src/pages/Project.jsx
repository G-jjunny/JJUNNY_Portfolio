import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProjectCard from "../components/ProjecCard/ProjectCard";
import SinkwangCard from "../components/ProjecCard/SmuMemoryCard";
import ProjectSlider from "../components/ProjectSlider";

const ProjectContainer = styled.div`
  width: 100vw;
  height: 100vh;
  transition: 1s;
  opacity: ${({ isThird }) => (isThird ? "1" : "0")};
  .project-center {
    height: max-content;
    margin: 100px 0;
    .text {
      color: var(--main-white);
      text-align: center;
      margin-bottom: 20px;
    }
    .card-group {
      display: flex;
      gap: 20px;
    }
  }
`;

export default function Project() {
  const [isThird, setIsThird] = useState(false);
  const animate = useSelector((state) => state.animate);

  useEffect(() => {
    if (animate === "third") {
      setIsThird(true);
    } else {
      setIsThird(false);
    }
  }, [animate]);
  return (
    <ProjectContainer isThird={isThird}>
      <div className="project-center">
        <h2 className="text">Preview of Preject</h2>
        {/* <div className="card-group">
          <ProjectCard />
          <SinkwangCard />
        </div> */}
        <div className="slide-container">
          <ProjectSlider />
        </div>
      </div>
    </ProjectContainer>
  );
}

// export default Project;
