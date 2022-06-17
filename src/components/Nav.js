import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Youtube from "../icons/Youtube";
import useMediaQuery from "@mui/material/useMediaQuery";

const IconsStyled = ({ color, children }) => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "62px",
    height: "62px",
    border: `2px solid ${color}`,
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "ease-out 0.1s",
    },
  };

  return <Box sx={style}>{children}</Box>;
};

const ulStyle = {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
};

export default function Nav() {
  const matches = useMediaQuery("(max-width: 535px)");

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        bottom: "0",
        zIndex: "9999",
        width: "100%",
      }}
      mt={4}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant={matches ? "h2" : "h1"}
          color="inherit"
          sx={{ fontWeight: "bold" }}
        >
          Logo
        </Typography>
        <ul style={ulStyle}>
          <li>
            <IconsStyled color="#009CD9">
              <Facebook size={30} />
            </IconsStyled>
          </li>
          <li style={{ margin: "0 15px" }}>
            <IconsStyled color="#B72C2C">
              <Instagram size={25} />
            </IconsStyled>
          </li>
          <li>
            <IconsStyled color="#D8AD3D">
              <Youtube size={30} />
            </IconsStyled>
          </li>
        </ul>
      </header>
    </Box>
  );
}
