import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Logo from "../image/logo/ecoThaili-color-logo.webp";
import HeroImg from "../image/hero-img.PNG";
import { Button } from "react-scroll";
import { Box } from "@mui/material";

const TextComponent = "Hello World";

const StyledContainer = styled(Container)({
  padding: "5rem 0",
  width: "100%",
  zIndex: "2",
  "@media (min-width:600px)": {
    // padding: "15vw 5vw",
    padding: "10rem 5vw",
    minHeight: "100vh",
    textAlign: "center",
    // margin: "0 5rem"
  },
});

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 6vw, 6.2rem)", // Use clamp() here
  //   margin: "0 0 5vw 0",
});

export default function HeroSection() {
  return (
    <StyledContainer
      id="hs"
      maxWidth="xl"
      sx={{
        height: { sm: "100%" },
        minHeight: { sm: "100%", md: "100vh" },
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        gap: { md: "5vw" },
        // border: "2px solid red",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { md: "calc(50vw - 10vw)" },
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "column",
          gap: "3vw",
        }}
      >
        <Box>
          <Title>EcoThaili</Title>
          <Typography
            style={{
              fontSize: "clamp(1.5rem, 1.3vw, 3rem)",
              margin: "-1rem 0 0 0",
              fontWeight: "bold",
            }}
          >
            Bag The Future Responsibly
          </Typography>
          <Typography
            style={{ fontSize: "clamp(1rem, 1vw, 1.4rem)", opacity: ".7" }}
          >
            🌿#EcoThaili #BeatPlasticWithUs
          </Typography>
        </Box>
        <Button
          style={{
            width: "max-content",
            padding: "1rem 2rem",
            fontSize: "clamp(1rem, 1vw, 2rem)",
            margin: "0 auto",
            border: "none",
            borderRadius: ".5rem",
            color: "#fff",
            fontWeight: "600",
            background: "#226A49",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          sx={{
            "&:hover": {
              background: "#6E8057",
            },
          }}
        >
          Get in Touch &nbsp;&nbsp;
          <ArrowCircleRightIcon />
        </Button>
      </Box>
      <Box
        style={{}}
        sx={{
          width: { md: "calc(50vw - 10vw)",sm:"calc(100vw - 20vw)" },
        }}
      >
        <img src={HeroImg} />
      </Box>
    </StyledContainer>
  );
}
