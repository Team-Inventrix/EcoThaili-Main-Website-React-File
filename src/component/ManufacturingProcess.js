import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ManufacturingProcessChart from "../image/designedImages/manufacturing.png";
import MaterialCompositionChart from "../image/designedImages/composition.png";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  width: "100%",
  // background: "#226a49",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    padding: "5rem 15rem 9rem 15rem",
    textAlign: "center",
    minHeight: "100vh",
  },
});

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  // margin: "3rem 0",
  "@media (min-width:600px)": {
    marginBottom: "6rem"
  },
});

const Body = styled(Typography)({
  color: "#2B2B60",
  textAlign: "justify",

  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const StyledImage = styled("img")({
  height:"auto",
  width:"100%",
  "@media (min-width:600px)": {
    height: "auto",
    width: "100%",
  },
  // background: "#EFEEEF",
  // border: "2px solid red",
  // marginBottom:'-.4rem' // To hide the small space below the image
});

const ImageName = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.5",
});

export default function ManufacturingProcess() {
  return (
    <StyledContainer id="mp" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Manufacturing Process
          </Title>
          <Body variant="body1">
              <StyledImage
                alt="Manufacturing Composition"
                src={ManufacturingProcessChart}
              />
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
