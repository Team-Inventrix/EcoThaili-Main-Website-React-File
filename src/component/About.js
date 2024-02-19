import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ourTeam from "../image/OurTeam.webp";

const StyledContainer = styled(Container)({
  padding: "0",
  height: "auto",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  "@media (min-width:600px)": {
    padding: "5vw 0 0 0",
    height: "auto",
    width: "100%",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "1rem 0",
  "@media (min-width:600px)": {
    margin: "0 0 5vw 0",
  },
});

const Body = styled(Typography)({

});

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  marginBottom: "-.4rem",
});

export default function OurStory() {
  return (
    <StyledContainer id="a" maxWidth={false} >
      <Grid container spacing={6} padding={0}>
        <Grid item xs={12} md={12} paddingLeft={0} paddingTop={0}>
          <Title component="h2" variant="h4">
            About Our Team
          </Title>
          <Body variant="body1">
            <StyledImage src={ourTeam} alt=" We Inventrix " />{" "}
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
