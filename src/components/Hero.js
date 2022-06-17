import { Typography } from "@mui/material";
import React from "react";
import HeroImg from "../images/hero.png";
import Brush from "../images/BRUSH.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const bottomStyle = {
  position: "absolute",
  width: "100%",
  height: "253px",
  left: "0px",
  bottom: "0",
  background:
    "linear-gradient(0deg, #FFFFFF 0%, #FFFFFF 32.22%, rgba(255, 255, 255, 0.71) 61.99%, rgba(255, 255, 255, 0.0729167) 93.72%, rgba(255, 255, 255, 0) 93.72%)",
};

const heroImgStyle = {
  width: "100vw",
  height: "100vh",
  objectFit: "fill",
};

const styledHeroText = {
  position: "absolute",
  bottom: "0",
  transform: "translate(50%, -90%)",
  zIndex: "2",
  width: "632px",
  height: "250px",
};

const brushStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  bottom: "0",
  transform: "translate(-50%, 50%)",
  zIndex: "-1",
};

const Hero = () => {
  const matches = useMediaQuery("(max-width: 535px)");

  if (matches) {
    delete styledHeroText.transform;
    styledHeroText.top = "0";
    styledHeroText.margin = "18rem 0";
    styledHeroText.width = "300px";
    styledHeroText.padding = " 0 20px";
    brushStyle.transform = "translate(-70%, 30%)";
  }

  return (
    <header>
      <section>
        <img style={heroImgStyle} src={HeroImg} alt="cousine" />
        <section style={styledHeroText}>
          <Typography
            variant={matches ? "h2" : "h1"}
            sx={{ fontWeight: "bold" }}
          >
            El secreto de tu cocina
          </Typography>
          <img src={Brush} style={brushStyle} alt="brush" />
        </section>
      </section>
      <div style={bottomStyle} />
    </header>
  );
};

export default Hero;
