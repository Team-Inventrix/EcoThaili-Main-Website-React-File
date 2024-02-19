import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Problem1Image from "../image/problem/problem-1.webp";
import Problem2Image from "../image/problem/problem-2.webp";
import Problem3Image from "../image/problem/problem-3.webp";
import Problem4Image from "../image/problem/problem-4.webp";

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

export default function ProblemStatement() {
  return (
    <StyledContainer id="ps" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Problem Statement
          </Title>
          <ProblemBoard>
            <ProblemContainer sx={{width:{xs:"80vw",sm:"90vw"}}}>
              <ProblemDescription>
                <ProblemData>98 %</ProblemData>
                <ProblemBodyText>
                Globally, 98% of the 400 million metric tonnes of plastic produced yearly is derived from fossil fuels, with 3 metric tonnes of fossil fuel consumed per 1 metric tonne of plastic.[source: our world in data]
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
                <ProblemData>400 years</ProblemData>
                <ProblemBodyText>
                Plastic degradation takes over 400 years, and only 9% is currently able to recycled. [Source: NatGeo]
                </ProblemBodyText>
              </ProblemDescription>
            </ProblemContainer>

            <ProblemContainer sx={{width:{xs:"80vw",sm:"90vw"}}}>
              <ProblemDescription>
                <ProblemData>3.3 %</ProblemData>
                <ProblemBodyText>
                Plastics contribute to 3.3% of global emissions, amounting to approximately 2 billion tonnes of CO2 equivalent annually.[source: our world in data]
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
                <ProblemData>8 - 10 Million</ProblemData>
                <ProblemBodyText>
                Annually, 8-10 million metric tonnes of plastic enter oceans, worsening the accumulation. Over 700 species suffer negative interactions with marine litter[mainly plastics], leading to about 100,000 animal deaths yearly due to entanglement.
                </ProblemBodyText>
              </ProblemDescription>
            </ProblemContainer>
          </ProblemBoard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
