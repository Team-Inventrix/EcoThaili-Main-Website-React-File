import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Button from "@mui/material/Button";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  minHeight: "100vh",
  width: "100%",
  background: "#2B2B60",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#EFEEEF",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 3vw, 3rem)",
  margin: "0 0 3rem 0",
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

const Body = styled(Typography)({
  color: "#EFEEEF",
  textAlign: "justify",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.7",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

export default function PageNotFound() {
  return (
    <StyledContainer maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <ErrorOutlineIcon style={{ fontSize: 100, color: "#EFEEEF" }} />
          <Title component="h2" variant="h4">
            404 Page Not Found
          </Title>
          <Body variant="body1">
            Despite our expertise in creating web pages, we regret to inform you
            that the specific page you’re searching for does not exist on our
            website. We apologize for any inconvenience this may cause.
          </Body>
          <br />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => (globalThis.location.href = "/")}
          >
            Return to Homepage
          </Button>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
