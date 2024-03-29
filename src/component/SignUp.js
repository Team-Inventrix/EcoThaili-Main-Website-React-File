import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DvrIcon from '@mui/icons-material/Dvr';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Header from "./Header";
import { styled } from "@mui/system";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://eocthaili.vercel.app/">
        EcoThaili
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  height: "100%",
  width: "100%",
  // background: "#226a49",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "2",
  "@media (min-width:600px)": {
    padding: "15vw 5vw",
    height: "100vh",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#226a49",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "0 0 5vw 0",
});

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <StyledContainer component="main" maxWidth={false} sx={{display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center", minHeight: { sm: "100%", md: "100vh" } }}>
      <Header /> <br />
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: "1.5vw", bgcolor: "#226A49" }}>
          <DvrIcon />
        </Avatar>
        <Title component="h1" variant="h5">
          Sign up
        </Title>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,backgroundColor: '#226A49' }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item >
              <Link href="/signin" variant="body2" sx={{color:'#226a49'}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </StyledContainer>
  );
}
