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
  margin: "0 0 5vw 0",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    margin: "0 auto",
    minWidth: "50%",
    maxWidth: "70%",
    paddingTop: "0.5rem",
    borderBottom: ".5px solid #EFEEEF",
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
  // border:"2px solid red",
  "@media (min-width:600px)": {
    height: "max-content",
  },
});

const ImpactContainer = styled(Box)({
  display: "flex",
  height: "auto",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: ".5rem",
  padding: "1rem",
  background: "#cfcfedd6",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px 3px #05140199",
  "@media (min-width:600px)": {
    gap: "1rem",
  },
});

const ImapctIcon = styled("img")({
  width: "100%",
  aspectRatio: "5/4",
  objectFit: "contain",
});

const ImpactName = styled(Typography)({
  fontWeight: "600",
  fontSize: "clamp(1rem, 2vw, 1.3rem)",
  color: "#2B2B60",
  textAlign:"center",
  marginTop: "1em",
});

export default function ProblemWeAreSolving() {
  return (
    <StyledContainer id="oi" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Environmental Impact
          </Title>
          <ImpactBoard sx={{ width: { sm: "90vw" }, gap: { sm: "3.33vw", xs: "5vw" } }}>
            <ImpactContainer sx={{
                height: { sm: "27vh", md: "100%" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}>
              <ImapctIcon alt="Green House Outline Icon" src={GreenHouseIcon} />
              <ImpactName>80% Less Green House Emission</ImpactName>
            </ImpactContainer>

            <ImpactContainer sx={{
                height: { sm: "27vh", md: "100%" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}>
              <ImapctIcon alt="Upcycle Outline Icon" src={UpCycleIcon} />
              <ImpactName>Massive Banana Waste Upcycle</ImpactName>
            </ImpactContainer>

            <ImpactContainer sx={{
                height: { sm: "27vh", md: "100%" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}>
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
          <ImpactBoard sx={{ width: { sm: "90vw" }, gap: { sm: "3.33vw", xs: "5vw" } }}>
            <ImpactContainer sx={{
                height: { sm: "27vh", md: "100%" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}>
              <ImapctIcon
                alt="Sustainable City Outline Icon"
                src={SustainableCityIcon}
              />
              <ImpactName>Helps In Creating Sustainable Cities</ImpactName>
            </ImpactContainer>

            <ImpactContainer sx={{
                height: { sm: "27vh", md: "100%" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}>
              <ImapctIcon alt="Low Energy Outline Icon" src={LowEnergyIcon} />
              <ImpactName>Low Energy Consumption</ImpactName>
            </ImpactContainer>

            <ImpactContainer sx={{
                height: { sm: "27vh", md: "100%" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}>
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
