import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ManufacturingProcessChart from "../image/designedImages/manufacturing.png";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    padding: "5vw 5vw",
    textAlign: "center",
    minHeight: "100vh",
  },
});

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  margin: "0 0 5vw 0",
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
    <StyledContainer id="mp" maxWidth={false} sx={{minHeight: { sm: "100%", md: "100vh" }}}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Manufacturing Process
          </Title>
          <Body variant="body1">
              <StyledImage
                alt="Manufacturing Composition"
                src={ManufacturingProcessChart}
                sx={{minWidth:{sm:"calc(100% )",md:"calc(100% )"}}}
              />
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
