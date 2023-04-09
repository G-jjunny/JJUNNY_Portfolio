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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SmuHistory from "../../images/smuHistory.png";
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

function SmuMemoryCard({ isActive, id }) {
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
                alt="Remy Sharp"
                src={Profile}
                // sx={{ width: 56, height: 56 }}
                // aria-label="recipe"
              ></Avatar>
            </StyledBadge>
          ) : (
            <Avatar
              alt="Remy Sharp"
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
        title="부전공 졸업작품 추억속으로"
        subheader="2022.04 - 2022.08"
      />
      <CardMedia
        component="img"
        height={`${expanded ? "150px" : "230px"}`}
        image={SmuHistory}
        alt="sinkwangcar"
      />
      <CardContent sx={{ padding: "8px 24px 0 24px" }}>
        <Typography variant="body2" color="text.primary">
          세명대학교 부전공 졸업작품으로 캡스톤디자인 경연대회에 참가하여 본선에
          진출 및 전시회를 열었던 작품으로, 세명대학교의 빅데이터를 수집하여
          전처리를 하고 그 데이터를 이용하여 인터랙티브 웹페이지를 제작을 한
          작품입니다.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          href="https://github.com/G-jjunny/SMU-Memory"
          target="_BLANK"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="share"
          href="https://inquisitive-pudding-73ca93.netlify.app/#page-top"
          target="_BLANK"
        >
          <LinkIcon />
        </IconButton>
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
          <BadgeRow>
            <img
              src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
              alt="javascript"
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
          <BadgeRow>
            <img
              src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white"
              alt="bootstrap"
            />
          </BadgeRow>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SmuMemoryCard;
