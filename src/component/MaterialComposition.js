import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
// import ManufacturingProcessChart from "../image/designedImages/manufacturing.png";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  height: "100%",
  width: "100%",
  background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  lineHeight: "1.5",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  background: "#EFEEEF",
  // marginBottom:'-.4rem' // To hide the small space below the image
});

export default function OurStory() {
  return (
    <StyledContainer id="mc" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Material Composition
          </Title>
          <Body variant="body1">
            <div style={{background:"#2B2B60", height:"max-content", width:"100%", color:"#EFEEEF",padding:"1rem .5rem"}}>
              {/* <StyledImage
                alt="Manufacturing Process"
                src={ManufacturingProcessChart}
              /> */}
              [Manufacturing Process Flow chart will be updated soon]
            </div>
            <br></br>
            <div style={{background:"#2B2B60", height:"max-content", width:"100%", color:"#EFEEEF",padding:"1rem .5rem"}}>
              {/* <StyledImage
                alt="Manufacturing Process"
                src={ManufacturingProcessChart}
              /> */}
              [Composition Flow chart will be updated soon]
            </div>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
