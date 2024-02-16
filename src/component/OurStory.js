import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  height: "100%",
  width: "100%",
  background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "2",
  "@media (min-width:600px)": {
    padding: "15rem",
    height: "100vh",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#2B2B60",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  margin: "3rem 0",
});

const Body = styled(Typography)({
  color: "#2B2B60",
  textAlign: "justify",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.7",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

export default function OurStory() {
  return (
    <StyledContainer id="os" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            The EcoThaili Story
          </Title>
          <Body variant="body1">
            Our mission is to protect our only planet, by creating eco-friendly
            plastic from banana crop waste. It's not just a bag; it's a promise
            to nurture our planet. Every use is a step towards a cleaner,
            greener future. Together, let's make a difference.
            <br /> 🌿<b>#EcoThaili #BeatPlasticWithUs</b>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
