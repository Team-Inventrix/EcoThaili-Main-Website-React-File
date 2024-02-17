import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Problem1Image from "../image/problem/problem-1.jpg";
import Problem2Image from "../image/problem/problem-2.jpg";
import Problem3Image from "../image/problem/problem-3.jpg";
import Problem4Image from "../image/problem/problem-4.jpg";

const StyledContainer = styled(Container)({
  padding: "5rem 0",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    padding: "10rem 0",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#226A49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "0 0 5vw 0",
});

const ProblemBoard = styled(Typography)({
  color: "#226A49",
  textAlign: "justify",
  display: "flex",
  flexDirection: "column",
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  lineHeight: "1.5",
  gap: "5vw",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const ProblemContainer = styled(Box)({
  display: "flex",
  height: "auto",
  margin: "auto",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "5vw",
  padding: "1rem",
  borderRadius: "1rem",
  borderTop: "1.5px solid #1D2064",
  boxShadow: "0 4px 6px #0f166899",
});

const ProblemDescription = styled(Box)({
  width: "100%",
  "@media (min-width:600px)": {
    width: "50vw",
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
  fontSize: "clamp(3rem, 6vw, 8.5rem)",
  fontWeight: "bolder",
  textAlign: "center",
});
const ProblemBodyText = styled(Typography)({
  fontSize: "clamp(1.4rem, 1vw, 3rem)",
  textAlign: "justify",
  color: "#226A49",
  lineHeight: "1.7",
  opacity: ".8",
});

const ProblemImage = styled("img")({
  width: "100%",
  aspectRatio: "5/4",
  objectFit: "fill",
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
            <ProblemContainer sx={{width:{xs:"80vw",sm:"90vw"}}}>
              <ProblemDescription>
                <ProblemData>20 %</ProblemData>
                <ProblemBodyText>
                Every year, Nepal generates a staggering amount of plastic waste, contributing to environmental degradation and threatening biodiversity. Our mission is to combat this issue by transforming banana crop waste into eco-friendly plastic solutions.
                </ProblemBodyText>
              </ProblemDescription>
              <ProblemImage
                alt="problem 1"
                src={Problem1Image}
              />
            </ProblemContainer>

            <ProblemContainer sx={{width:{xs:"80vw",sm:"90vw"}}}>
              <ProblemImage
                alt="problem 2"
                src={Problem2Image}
              />
              <ProblemDescription>
                <ProblemData>80 %</ProblemData>
                <ProblemBodyText>
                By utilizing EcoThaili, we aim to significantly reduce greenhouse gas emissions, diverting banana crop waste from landfills and providing a sustainable alternative to traditional plastic.
                </ProblemBodyText>
              </ProblemDescription>
            </ProblemContainer>

            <ProblemContainer sx={{width:{xs:"80vw",sm:"90vw"}}}>
              <ProblemDescription>
                <ProblemData>30 %</ProblemData>
                <ProblemBodyText>
                Our initiative not only benefits the environment but also empowers local communities by creating jobs and fostering economic growth. By supporting EcoThaili, you're contributing to the development of sustainable cities and livelihoods.
                </ProblemBodyText>
              </ProblemDescription>
              <ProblemImage
                alt="problem 3"
                src={Problem3Image}
              />
            </ProblemContainer>

            <ProblemContainer sx={{width:{xs:"80vw",sm:"90vw"}}}>
              <ProblemImage
                alt="problem 4"
                src={Problem4Image}
              />
              <ProblemDescription>
                <ProblemData>50 %</ProblemData>
                <ProblemBodyText>
                Through widespread adoption of EcoThaili, we aim to disrupt the plastic industry's reliance on imports, promoting self-sufficiency and boosting the local economy. Join us in reshaping the market landscape with sustainable alternatives.
                </ProblemBodyText>
              </ProblemDescription>
            </ProblemContainer>
          </ProblemBoard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
