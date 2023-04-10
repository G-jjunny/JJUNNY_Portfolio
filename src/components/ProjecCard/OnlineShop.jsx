// import React from "react";
// import styled from "styled-components";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InstagramIcon from "@mui/icons-material/Instagram";
import OnlineShopping from "../../images/onlineshop.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import Profile from "../../images/profile.jpg";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import BadgeRow from "../BadgeRow";
import { useState } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledCardHeader = styled(CardHeader)`
  .MuiCardHeader-title {
    font-weight: 700;
    font-size: 16px;
  }
`;

function OnlineShop({ isActive, id }) {
  const [expanded, setExpanded] = React.useState(false);
  const animate = useSelector((state) => state.animate);
  const [isActiveBadge, setIsActiveBadge] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (animate !== "third" || isActive !== id) {
      setExpanded(false);
      setIsActiveBadge(false);
    }

    if (isActive === id) {
      setIsActiveBadge(true);
    }
  }, [animate, isActive, id]);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "470px",
        display: "block",
        margin: "auto",
      }}
    >
      <StyledCardHeader
        avatar={
          isActiveBadge ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="jjunny"
                src={Profile}
                // sx={{ width: 56, height: 56 }}
                // aria-label="recipe"
              ></Avatar>
            </StyledBadge>
          ) : (
            <Avatar
              alt="jjunny"
              src={Profile}
              // sx={{ width: 56, height: 56 }}
              // aria-label="recipe"
            ></Avatar>
          )
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="MusixPlayer"
        subheader="2023.01 - 2022.02"
        sx={{ fontWeight: "700" }}
      />
      <CardMedia
        component="img"
        height={`${expanded ? "130px" : "230px"}`}
        image={OnlineShopping}
        alt="Music"
      />
      <CardContent sx={{ padding: "8px 24px 0 24px" }}>
        <Typography variant="body2" color="text.primary">
          Redux를 학습하면서 제작한 쇼핑몰 장바구니 기능을 구현한 웹 페이지
          입니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="Github"
          href="https://github.com/G-jjunny/jjunny-shop"
          target="_BLANK"
        >
          <GitHubIcon />
        </IconButton>
        {/* <IconButton
          aria-label="link"
          href="http://sinkwangcar.co.kr/"
          target="_BLANK"
        >
          <LinkIcon />
        </IconButton>
        <IconButton
          aria-label="instagram"
          href="https://instagram.com/sinkwangcar?igshid=YmMyMTA2M2Y="
          target="_BLANK"
        >
          <InstagramIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: "8px 8px 24px" }}>
          <Typography paragraphsx={{ marginBottom: "5px" }}>
            사용 기술:
          </Typography>
          {/* <Typography paragraph sx={{ marginBottom: "5px" }}> */}
          <BadgeRow>
            <img
              src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="javaScript"
            ></img>
            <img
              src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"
              alt="html"
            ></img>
            <img
              src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"
              alt="css"
            ></img>
          </BadgeRow>
          {/* </Typography> */}

          {/* <Typography paragraph sx={{ marginBottom: "0" }}> */}
          <BadgeRow>
            <img
              src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"
              alt="react"
            ></img>
            <img
              src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"
              alt="redux"
            ></img>
            <img
              src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"
              alt="nodejs"
            ></img>
          </BadgeRow>
          <BadgeRow>
            <img
              src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"
              alt="sass"
            />
            <img
              src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white"
              alt="mui"
            />
          </BadgeRow>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default OnlineShop;
