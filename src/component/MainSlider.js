import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18";
import { autoPlay } from "react-swipeable-views-utils";
import SliderImg1 from "../image/sliderImages/slider-1.jpg";
import SliderImg2 from "../image/sliderImages/slider-2.jpg";
import SliderImg3 from "../image/sliderImages/slider-3.jpg";
import SliderImg4 from "../image/sliderImages/slider-4.jpg";
import { styled } from "@mui/system";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews, { interval: 5000 });

const images = [
  {
    label: "Banana Leaves",
    imgPath: SliderImg1,
  },
  {
    label: "Banana Leaf",
    imgPath: SliderImg2,
  },
  {
    label: "Banana PseudoSteam",
    imgPath: SliderImg3,
  },
  {
    label: "Information about Banana PseudoSteam and Leaf",
    imgPath: SliderImg4,
  },
];

function MainSlider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const StyledContainer = {
    padding: "5rem 1.5rem",
    "@media (min-width:600px)": {
      textAlign: "center",
    },
  };

  return (
    <Container
      id="ms"
      sx={{
        py: { xs: 8, sm: 16, md: 6 },
        px: { xs: "0", sm: "0", md: 0 },
        pb: { md: "0" },
        pt: { sm: "5rem" },
        mt: { xs: "1rem" },
        mb: { xs: "-4rem", sm: "-8rem", md: "-2rem" },
        minHeight: { xs: "50vh", md: "100vh" },
        maxWidth: { md: "100%" },
        overflow: { md: "hidden" },
      }}
      maxWidth={false}
    >
      <Grid
        container
        sx={{
          minWidth: { xs: "100vw" },
          maxHeight: { md: "90vh" },
          margin: { xs: "0", md: "2rem 0" },
          px: { xs: "0" },
        }}
        overflow="hidden"
      >
        <Grid item xs={12} md={12}>
          <div>
            <Box
              sx={{
                position: "relative",
              }}
              id="ms"
            >
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div
                    key={step.label}
                    style={{
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: "100%",
                          width: "100%",
                          display: "block",
                          overflow: "hidden",
                          margin: "auto",
                          objectFit: "fill",
                          objectPosition: "center",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainSlider;