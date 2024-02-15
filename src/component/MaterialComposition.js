import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ManufacturingProcessChart from "../image/designedImages/manufacturing.png";
import MaterialCompositionChart from "../image/designedImages/composition.png";

const StyledContainer = styled(Container)({
  // padding: "5rem 1.5rem",
  // minHeight: "100vh",
  width: "100%",
  background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    // padding: "15rem",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#2B2B60",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  margin: "3rem 0 0 0",
});

const Body = styled(Typography)({
  color: "#2B2B60",
  textAlign: "justify",
  
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const ImageContainer = styled("figure")({
  minHeight:"100%",
  maxWidth:"100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  margin: "5rem auto",
  "@media (min-width:600px)": {
    minHeight:"100vh",
    maxWidth:"90vw"
  },
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  background: "#EFEEEF",
  // border: "2px solid red",
  // marginBottom:'-.4rem' // To hide the small space below the image
});

const ImageName = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.5",
})

export default function OurStory() {
  return (
    <StyledContainer id="mc" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Material Composition
          </Title>
          <Body variant="body1">
            <ImageContainer>
              <StyledImage
                alt="Manufacturing Process"
                src={ManufacturingProcessChart}
              />
              <ImageName>Manufacturing Process</ImageName>
            </ImageContainer>

            <ImageContainer>
              <StyledImage
                alt="Material Composition"
                src={MaterialCompositionChart}
              />
              <ImageName>Material Composition</ImageName>
            </ImageContainer>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
