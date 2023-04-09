import { Controller, Scene } from "react-scrollmagic";
import "./App.css";
import "animate.css";
import Info from "./pages/Info";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Swiper from "./components/Swiper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectSlider from "./components/ProjectSlider";
import Contact from "./pages/Contact";

function App() {
  const dispatch = useDispatch();
  const animate = useSelector((state) => state.animate);

  useEffect(() => {
    function handleScroll() {
      // 첫 번째 컴포넌트 애니메이션
      if (window.scrollY < 500) {
        dispatch({ type: "SET_ANIMATE", payload: "first" });
      }
      // 2번째 컴포넌트 애니메이션
      else if (1200 < window.scrollY && window.scrollY < 1900) {
        dispatch({ type: "SET_ANIMATE", payload: "second" });
      }
      // 3번째 컴포넌트 애니메이션
      else if (2800 < window.scrollY && window.scrollY < 3500) {
        dispatch({ type: "SET_ANIMATE", payload: "third" });
      } else if (4300 < window.scrollY) {
        dispatch({ type: "SET_ANIMATE", payload: "last" });
      } else {
        // 스크롤 최상단일때 payload가 빈 문자 이므로 "none"을 주어 겹치는거 방지
        dispatch({ type: "SET_ANIMATE", payload: "none" });
      }
      // console.log("scrollY" + window.scrollY);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  console.log("animate : ", animate);

  return (
    <>
      {/* <ProjectSlider /> */}
      <Swiper>
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene pin>
            <div className="panel main">
              <Main />
            </div>
          </Scene>
          <Scene pin>
            <div className="panel info">
              <Info />
            </div>
          </Scene>
          <Scene pin>
            <div className="panel project">
              <Project />
            </div>
          </Scene>
          <Scene pin>
            <div className="panel contact">
              <Contact />
            </div>
          </Scene>
        </Controller>
      </Swiper>
    </>
  );
}

export default App;
