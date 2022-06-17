import React from "react";
import Typography from "@mui/material/Typography";
import Brush from "../images/BRUSH-ARTICLES.png";
import { Box } from "@mui/system";
import ContactForm from "./ContactForm";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact = () => {
  const matches = useMediaQuery("(max-width: 535px)");

  return (
    <section style={{ height: "100%" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 12rem",
        }}
      >
        <header style={{ marginBottom: "2rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: `${matches ? "60px" : "80px"}`,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Contáctanos
          </Typography>
          <img
            src={Brush}
            alt="brush"
            style={{ marginTop: "-45px", width: `${matches ? "250px" : "400px"}` }}
          />
        </header>
        <Box mb={5}>
          <ContactForm  />
        </Box>
      </div>
    </section>
  );
};

export default Contact;
