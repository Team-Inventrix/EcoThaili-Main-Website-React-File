import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views-react-18';
import { autoPlay } from 'react-swipeable-views-utils';
import SliderImg1 from '../image/sliderImages/slider-1.jpg'
import SliderImg2 from '../image/sliderImages/slider-2.jpg'
import SliderImg3 from '../image/sliderImages/slider-3.jpg'
import SliderImg4 from '../image/sliderImages/slider-4.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews, { interval: 5000 });

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      SliderImg1,
  },
  {
    label: 'Bird',
    imgPath:
      SliderImg2,
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      SliderImg3,
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      SliderImg4,
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

  return (
    <Box sx={{ maxWidth: "100vw", minHeight: "100vh", position:"relative"}} id="ms">

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{height: "100vh", width:"100%", overflow: "hidden"}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "100%",
                  display: 'block',
                  overflow: 'hidden',
                  minWidth: '100%',
                  margin: "auto",
                  objectFit: "fill",
                  objectPosition: "center"
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
      {/* <Paper
        square
        elevation={0}
        position="absolute"
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'transparant',
        }}
        
      >
        <Typography style={{fontWeight:"bold"}}>{images[activeStep].label}</Typography>
      </Paper>

      <MobileStepper
        steps={maxSteps}
        position="absolute"
        top="0"
        left="0"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default MainSlider;
