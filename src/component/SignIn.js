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
import VpnKeyIcon from '@mui/icons-material/VpnKey';
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
      <Link color="inherit" href="https://team-inventrix.vercel.app/">
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

export default function SignIn() {
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
            <VpnKeyIcon />
          </Avatar>
          <Title component="h1" variant="h5">
            Sign in
          </Title>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#226A49' }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{color:'#226a49'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link href="/signup" variant="body2" sx={{color:'#226a49'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </StyledContainer>
  );
}
