import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ProblemWeAreSolving() {
  return (
    <Container id="pwas" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Problem We are Solving
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
      </Grid>
    </Container>
  );
}
