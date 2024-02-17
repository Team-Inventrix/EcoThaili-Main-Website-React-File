import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  minHeight: "100vh",
  width: "100%",
  // background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    padding: "10rem",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#226A49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  margin: "0 0 3rem 0",
});

const ProblemBoard = styled(Typography)({
  color: "#226A49",
  textAlign: "justify",
  display: "flex",
  flexDirection: "column",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.5",
  gap: "6rem",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const ProblemContainer = styled(Box)({
  display: "flex",
  height: "auto",
  width: "100%",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "1rem",
  // background: "#cfcfed45",
  borderRadius: "1rem",
  borderTop: "1.5px solid #1D2064",
  boxShadow: "0 4px 6px #0f166899",
});

const ProblemDescription = styled(Box)({
  width: "100%",
  "@media (min-width:600px)": {
    width: "60%",
  },
  "@media (max-width:600px)": {
    "&:nth-child(odd)": {
      order: "2",
    },
    "&:nth-child(even)": {
      order: "2",
    },
  },
});

const ProblemData = styled(Typography)({
  fontSize: "clamp(3rem, 2vw, 8.5rem)",
  fontWeight: "bolder",
  textAlign: "center",
});
const ProblemBodyText = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  color: "#226A49",
  lineHeight: "1.7",
  opacity: ".8",
});

const ProblemImage = styled("img")({
  width: "100%",
  aspectRatio: "5/4",
  objectFit: "contain",
  "@media (min-width:600px)": {
    width: "30%",
  },
  "@media (max-width:600px)": {
    "&:nth-child(odd)": {
      order: "1",
    },
    "&:nth-child(even)": {
      order: "1",
    },
  },
});

export default function ProblemWeAreSolving() {
  return (
    <StyledContainer id="pwas" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Problem We are Solving
          </Title>
          <ProblemBoard>
            <ProblemContainer>
              <ProblemDescription>
                <ProblemData>20 %</ProblemData>
                <ProblemBodyText>
                  BioThaili, our eco-friendly plastic, is a story of change.
                  Made from banana fibers, it's more than just a bag – it's a
                  promise to be
                </ProblemBodyText>
              </ProblemDescription>
              <ProblemImage
                alt="problem 1"
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              />
            </ProblemContainer>

            <ProblemContainer>
              <ProblemImage
                alt="problem 2"
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              />
              <ProblemDescription>
                <ProblemData>40 %</ProblemData>
                <ProblemBodyText>
                  BioThaili, our eco-friendly plastic, is a story of change.
                  Made from banana fibers, it's more than just a bag – it's a
                  promise to be
                </ProblemBodyText>
              </ProblemDescription>
            </ProblemContainer>

            <ProblemContainer>
              <ProblemDescription>
                <ProblemData>80 %</ProblemData>
                <ProblemBodyText>
                  BioThaili, our eco-friendly plastic, is a story of change.
                  Made from banana fibers, it's more than just a bag – it's a
                  promise to be
                </ProblemBodyText>
              </ProblemDescription>
              <ProblemImage
                alt="problem 3"
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              />
            </ProblemContainer>

            <ProblemContainer>
              <ProblemImage
                alt="problem 2"
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              />
              <ProblemDescription>
                <ProblemData>40 %</ProblemData>
                <ProblemBodyText>
                  BioThaili, our eco-friendly plastic, is a story of change.
                  Made from banana fibers, it's more than just a bag – it's a
                  promise to be
                </ProblemBodyText>
              </ProblemDescription>
            </ProblemContainer>
          </ProblemBoard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
