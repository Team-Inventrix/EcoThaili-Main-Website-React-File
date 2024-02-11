import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ecothaili from "../image/banana-tree.png";

export default function Product() {
  return (
    <Container id="p" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Product
            </Typography>
            <Typography variant="body1" color="text.secondary">
              BioThaili, our eco-friendly plastic, is a story of change. Made
              from banana fibers, it's more than just a bag – it's a promise to
              be kind to our planet. Every use is a small step towards a
              cleaner, greener future. Join us in this journey, where simple
              choices make a big impact. BioThaili is not just plastic; it's a
              way to care for our Earth. Together, let's make a difference.
              <br /> 🌿 #BioThaili #EcoFriendly #Sustainability"
            </Typography>
          </div>
        </Grid>
        <Grid sx={{ flexGrow: 1 }} container spacing={6}>
          <Grid item xs={6}>
            <Grid container justifyContent="left" spacing="10px">
              {[0].map((value) => (
                <Grid key={value} item>
                  <Paper
                    sx={{
                      height: 250,
                      width: 350,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <Typography variant="h6" color="text.primary">
                      EcoThaili
                    </Typography>
                    <img src={ecothaili} alt="" />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
