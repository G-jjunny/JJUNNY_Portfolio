import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "./ProjecCard/ProjectCard";
import styled from "styled-components";
import SinkwangCard from "./ProjecCard/SmuMemoryCard";
import SmuMemoryCard from "./ProjecCard/SmuMemoryCard";
import StarbucksCard from "./ProjecCard/StarbucksCard";
import MusicPlayerCard from "./ProjecCard/MusicPlayerCard";

const SlideContainer = styled.div`
  /* overflow: hidden; */
  /* width: 100%; */
  /* justify-content: center; */
`;

const StyledSlider = styled(Slider)`
  align-items: center;
  .slick-list {
    /* padding: 0; */
  }
  .slick-slider {
    .slick-track {
      /* align-items: center; */
    }
  }
  .slick-slide {
    opacity: 0.4;
    transform: scale(0.85);
    transition: 0.5s;
    .slide-div {
      /* display: block;
      margin: auto; */
    }
  }
  .slick-slide.slick-center {
    transform: scale(1);
    opacity: 1;
    transition: 0.5s;
  }

  .styled-div {
    display: flex;
  }
`;

export default class ProjectSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  render() {
    var settings = {
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      className: "center",
      infinite: true,
      slidesToShow: 3,
      speed: 500,

      beforeChange: (current, next) => this.setState({ activeSlide: next }),

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
      ],
    };

    // console.log(this.state.activeSlide);
    return (
      <SlideContainer>
        <StyledSlider {...settings}>
          <div className="slide-div">
            <ProjectCard isActive={this.state.activeSlide} id={0} />
          </div>
          <div>
            <SmuMemoryCard isActive={this.state.activeSlide} id={1} />
          </div>
          <div>
            <StarbucksCard isActive={this.state.activeSlide} id={2} />
            {/* <ProjectCard /> */}
          </div>
          <div>
            <MusicPlayerCard isActive={this.state.activeSlide} id={3} />
          </div>
        </StyledSlider>
      </SlideContainer>
    );
  }
}
