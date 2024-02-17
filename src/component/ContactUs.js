import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ourTeam from "../image/OurTeam.png";

const StyledContainer = styled(Container)({
  minHeight: "100vh",
  width: "100vw",
  background: "#1A3306",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '@media (min-width:600px)': {
    padding: "0",
    width:"100%",
    textAlign: "center"
  },
});

const Title = styled(Typography)({
  color: "#FFFFFF",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "1rem 0",
  '@media (min-width:600px)': {
    margin: "3rem 0",
  },
});

const SubTitle = styled(Typography)({
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "clamp(1rem, 3vw, 3rem)",
    margin: "rem 0",
    '@media (min-width:600px)': {
      margin: "3rem 0",
    },
  });

const Body = styled(Typography)({
  color: "#2B2B60",
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  lineHeight: "1.5",
});

const HasTags = styled(Typography)({
    color:"#fff",
    opacity:".8",
    fontSize:"clamp(.7rem, 2vw, 1.5rem)",
    textAlign:"center",
    lineHeight:"1.8"
})

const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  marginBottom:'-.4rem'
});

export default function ContactUs() {
  return (
    <StyledContainer id="a" maxWidth={false}>
      <Grid container spacing={6} padding={0}>
        <Grid item xs={12} md={12} paddingLeft={0} paddingTop={0}>
          <Title component="h2" variant="h4">
            Contact Us
          </Title>
          <Body variant="body1">
            <HasTags>🌱 #EcoThaili #BeatPlasticWithUs #SustainabilityJourney</HasTags>
            <SubTitle>We'd love to hear from you</SubTitle>
            <HasTags>Reach out to us</HasTags>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
