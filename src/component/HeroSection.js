import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HeroImg from "../image/hero-img.PNG";
import { Button as MuiButton } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Wave from "../image/waves/heroSection.svg";

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 6vw, 6.2rem)",
});

const WaveImg = styled("img")({
  width: "100%",
  height: "auto",
  position: "absolute",
  bottom: "-3rem",
  left: "0",
});

export default function HeroSection() {
  return (
    <Container
      id="hs"
      maxWidth="xxl"
      sx={{
        position: "relative",
        height: { sm: "100%" },
        minHeight: { xs: "100%", sm: "100%", md: "100vh" },
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        justifyContent: "space-between",
        alignItem: "center",
        gap: { xs: "5vw", sm: "5vw", md: "5vw" },
        width: "100%",
        padding: {
          xs: "6rem 5vw 5rem 5vw",
          sm: "7rem 5vw 6rem 5vw",
          md: "6rem 15vw 5rem 15vw",
        },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: { md: "calc(50vw - 10vw)" },
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          flexDirection: "column",
          gap: { xs: "3vh", sm: "3vw" },
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#226a49",
              textAlign: "center",
              fontWeight: 700,
              fontSize: {
                xs: "clamp(3.5rem, 4vw, 4rem)",
                sm: "clamp(4.5rem, 6vw, 6rem)",
                md: "clamp(2rem, 6vw, 6.2rem)",
              },
            }}
          >
            EcoThaili
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(1rem, 2vw, 2rem)",
                sm: "clamp(1.3rem, 1.3vw, 3rem)",
                md: "clamp(1.5rem, 1.3vw, 3rem)",
              },
              margin: {xs:"-1rem 0 0 0",sm:"-1.5rem 0 0 0",md:"-2rem 0 0 0"},
              fontWeight: "bold",
              color: "#458d43",
            }}
          >
            Bag The Future Responsibly
          </Typography>
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(.8rem, 1vw, 1rem)",
                sm: "clamp(1rem, 1vw, 1.4rem)",
              },
              opacity: ".7",
            }}
          >
            🌿#EcoThaili #BeatPlasticWithUs
          </Typography>
        </Box>
        <Link to="/contact">
          <MuiButton
            style={{
              width: "max-content",
              padding: ".5rem 1rem",
              fontSize: "clamp(.7rem, 1vw, 2rem)",
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
          </MuiButton>
        </Link>
      </Box>
      <Box
        style={{}}
        sx={{
          width: {
            xs: "calc(100vw - 10vw)",
            sm: "calc(50vw - 10vw)",
            md: "calc(50vw - 10vw)",
          },
        }}
      >
        <img
          src={HeroImg}
          alt="EcoThaili Bag Hero Image"
          height="auto"
          width="100%"
          style={{
            filter: "drop-shadow(0px 0px 7px rgba(0, 0, 0,.3))",
          }}
        />
      </Box>
      <WaveImg
        src={Wave}
        alt="Wave for next component. This will give a nice transition."
        sx={{
          position: {xs:"absolute"},
          bottom: {xs:"-0.3rem",m:"23.5rem", md: "-3rem" },
          left: { xs:"0",m:"0", md: "0" },
        }}
      />
    </Container>
  );
}
