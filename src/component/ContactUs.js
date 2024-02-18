import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import bananaLeaf from "../image/banana-leaf 1.png";

const StyledContainer = styled(Container)({
  minHeight: "100vh",
  width: "100vw",
  background: "#fff",
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
  color: "#226A49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "1.5rem 0",
  '@media (min-width:600px)': {
    margin: "3rem 0",
  },
});

const SubTitle = styled(Typography)({
    color: "#226A49",
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
    color:"#226A49",
    opacity:".8",
    fontSize:"clamp(.8rem, 2vw, 1.5rem)",
    margin:".5rem 0",
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
          <Title component="h2" variant="h4" sx={{mt:{xs:"6rem"}}}>
            Contact Us
          </Title>
          <Body variant="body1">
            <HasTags>🌱 #EcoThaili #BeatPlasticWithUs #SustainabilityJourney</HasTags>
            <SubTitle>We'd love to hear from you</SubTitle>
            <HasTags>Reach out to us</HasTags>
          </Body>
          <Grid container spacing={2} sx={{ mt: 3,px:"5vw" }}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth label="Full Name" variant="outlined" style={{outlineColor:"white"}} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth label="Email Address" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth label="Phone Number" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                variant="outlined"
                placeholder="Please let us know what you think about our product! Thank you"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <Button variant="contained" color="primary" sx={{ backgroundColor: '#226A49', mb: '2.5rem' }}>
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
