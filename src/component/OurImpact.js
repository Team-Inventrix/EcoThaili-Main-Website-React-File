import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import GreenHouseIcon from "../image/icons/greenHouseGas.png";
import UpCycleIcon from "../image/icons/upCycle.png";
import ChemicalWasteIcon from "../image/icons/waste.png";
import SustainableCityIcon from "../image/icons/sustainableCity.png";
import LowEnergyIcon from "../image/icons/lowEnergy.png";
import ZeroValueWasteIcon from "../image/icons/zeroWasteEconomy.png";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  minHeight: "100vh",
  width: "100%",
  background: "#226a49",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "8rem",
  alignItems: "center",
  "@media (min-width:600px)": {
    padding: "7rem 0",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#EFEEEF",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 3vw, 3rem)",
  margin: "0 0 3rem 0",
  position: "relative", // Add this line
  "&::after": {
    content: '""', // Add this line
    display: "block", // Add this line
    margin: "0 auto", // Center the bar
    minWidth: "50%", // Adjust as needed
    maxWidth: "70%",
    paddingTop: "0.5rem", // Space from the text
    borderBottom: ".5px solid #EFEEEF", // Add this line
  },
});

const ImpactBoard = styled(Box)({
  display: "flex",
  margin: "auto",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "4rem",
  width: "80vw",
  "@media (min-width:600px)": {
    height: "max-content",
  },
});

const ImpactContainer = styled(Box)({
  display: "flex",
  height: "auto",
  width: "calc(50% - 2rem)",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  background: "#cfcfedd6",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px #0f166899",
  "@media (min-width:600px)": {
    width: "15%",
  },
});

const ImapctIcon = styled("img")({
  width: "100%",
  aspectRatio: "5/4",
  objectFit: "contain",
});

const ImpactName = styled(Typography)({
  // background: "#2B2B60",
  fontWeight: "600",
  fontSize: "clamp(.6rem, 2vw, 1rem)",
  color: "#2B2B60",
});

export default function ProblemWeAreSolving() {
  return (
    <StyledContainer id="oi" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Environmental Impact
          </Title>
          <ImpactBoard>
            <ImpactContainer>
              <ImapctIcon alt="Green House Outline Icon" src={GreenHouseIcon} />
              <ImpactName>80% Less Green House Emission</ImpactName>
            </ImpactContainer>

            <ImpactContainer>
              <ImapctIcon alt="Upcycle Outline Icon" src={UpCycleIcon} />
              <ImpactName>Massive Banana Waste Upcycle</ImpactName>
            </ImpactContainer>

            <ImpactContainer>
              <ImapctIcon
                alt="Chemical Waste Outline Icon"
                src={ChemicalWasteIcon}
              />
              <ImpactName>70% Reduce Chemical Waste</ImpactName>
            </ImpactContainer>
          </ImpactBoard>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Community Impact
          </Title>
          <ImpactBoard>
            <ImpactContainer>
              <ImapctIcon
                alt="Sustainable City Outline Icon"
                src={SustainableCityIcon}
              />
              <ImpactName>Helps In Creating Sustainable Cities</ImpactName>
            </ImpactContainer>

            <ImpactContainer>
              <ImapctIcon alt="Low Energy Outline Icon" src={LowEnergyIcon} />
              <ImpactName>Low Energy Consumption</ImpactName>
            </ImpactContainer>

            <ImpactContainer>
              <ImapctIcon
                alt="Zero Value Waste Outline Icon"
                src={ZeroValueWasteIcon}
              />
              <ImpactName>Zero Value Waste Into Cash</ImpactName>
            </ImpactContainer>
          </ImpactBoard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
