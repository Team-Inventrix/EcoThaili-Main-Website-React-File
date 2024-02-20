import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import HeroImg from "../image/hero-img.PNG";
import { Button } from "react-scroll";
import { Box } from "@mui/material";

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 6vw, 6.2rem)",
});

export default function HeroSection() {
  return (
    <Container
      id="hs"
      maxWidth="xl"
      sx={{
        height: { sm: "100%" },
        minHeight: { sm: "100%", md: "100vh" },
        display: "flex",
        justifyContent: "space-between",
        alignItem: "center",
        gap: { md: "5vw" },
        width: "100%",
        padding: { sm: "8rem 5vw 5rem 5vw", md: "10rem 5vw 5rem 5vw" },
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
          gap: "3vw",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#226a49",
              textAlign: "center",
              fontWeight: 700,
              fontSize: {md:"clamp(2rem, 6vw, 6.2rem)",sm:"clamp(4.5rem, 6vw, 6rem)"},
            }}
          >
            EcoThaili
          </Typography>
          <Typography
            sx={{
              fontSize: {md:"clamp(1.5rem, 1.3vw, 3rem)",sm:"clamp(1.3rem, 1.3vw, 3rem)"},
              margin: "-1rem 0 0 0",
              fontWeight: "bold",
            }}
          >
            Bag The Future Responsibly
          </Typography>
          <Typography
            sx={{ fontSize: "clamp(1rem, 1vw, 1.4rem)", opacity: ".7" }}
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
          width: { md: "calc(50vw - 10vw)", sm: "calc(50vw - 10vw)" },
        }}
      >
        <img
          src={HeroImg}
          alt="EcoThaili Bag Hero Image"
          height="auto"
          width="100%"
        />
      </Box>
    </Container>
  );
}
