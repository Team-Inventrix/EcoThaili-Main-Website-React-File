import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledContainer = styled(Container)({
    minHeight: "100vh",
    width: "100vw",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    '@media (min-width:600px)': {
      padding: "0",
      width:"100%",
      textAlign: "center"
    },
  });
  
  const Title = styled(Typography)({
    color: "#226A49",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "clamp(2rem, 4vw, 4rem)",
    margin: "0.75rem 0",
    '@media (min-width:600px)': {
      margin: "1.5rem 0",
    },
  });
  
  const SubTitle = styled(Typography)({
    color: "#226A49",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "clamp(1rem, 3vw, 3rem)",
    margin: "0.5rem 0",
    '@media (min-width:600px)': {
      margin: "1.5rem 0",
    },
  });
  
  const Body = styled(Typography)({
    color: "#2B2B60",
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    lineHeight: "1.5",
    margin: "0.25rem 0",
  });
  
  const HasTags = styled(Typography)({
    color:"#226A49",
    opacity:".8",
    fontSize:"clamp(.8rem, 2vw, 1.5rem)",
    margin:".25rem 0",
    textAlign:"center",
    lineHeight:"1.8"
  })
  
  export default function Career() {
    return (
      <StyledContainer id="a" maxWidth={false}>
        <Grid container spacing={6} padding={0}>
          <Grid item xs={12} md={12} paddingLeft={0} paddingTop={0}>
            <Title component="h2" variant="h4" sx={{mt:{xs:"6rem"}}}>
              Careers
            </Title>
            <Body variant="body1">
              <HasTags>🌱 #EcoThaili #BeatPlasticWithUs #SustainabilityJourney</HasTags>
              <SubTitle>We'd love to have you on our team</SubTitle>
              <HasTags>Apply now</HasTags>
            </Body>
            <Grid container spacing={2} sx={{ mt: 3,px:"5vw" }}>
              <Grid item xs={12} sm={12} md={12}>
                <Title component="h2" variant="h4">
                  Job Listings
                </Title>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: 'rgba(34, 106, 73, 0.5)' }}>
                      <TableRow>
                        <TableCell>S.N.</TableCell>
                        <TableCell align="right">Job Roles</TableCell>
                        <TableCell align="right">Job Description</TableCell>
                        <TableCell align="right">No of Vacancy</TableCell>
                        <TableCell align="right">Deadline</TableCell>
                        <TableCell align="right">Apply</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow sx={{ backgroundColor: 'rgba(34, 106, 73, 0.1)' }}>
                        <TableCell component="th" scope="row">1</TableCell>
                        <TableCell align="right">Front End Web Developer <b>(Test)</b></TableCell>
                        <TableCell align="right">We're currently looking for a Front End Web Developer. If you're interested, please fill out the form below and upload your CV.</TableCell>
                        <TableCell align="right">5</TableCell>
                        <TableCell align="right">2024-12-31</TableCell>
                        <TableCell align="right">
                          <Button variant="contained" color="primary" onClick={() => alert("We are only testing this page, sorry for the inconvenience")}
 sx={{ backgroundColor: '#226A49' }}>
                          {/* onClick={() => window.location.href='#'} */}
                            Apply Now
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow sx={{ backgroundColor: '#224c6a47' }}>
                        <TableCell component="th" scope="row">2</TableCell>
                        <TableCell align="right">Back End Web Developer <b>(Test)</b></TableCell>
                        <TableCell align="right">We're currently looking for a Back End Web Developer. If you're interested, please fill out the form below and upload your CV.</TableCell>
                        <TableCell align="right">3</TableCell>
                        <TableCell align="right">2024-12-31</TableCell>
                        <TableCell align="right">
                          <Button variant="contained" color="primary" onClick={() => alert("We are only testing this page, sorry for the inconvenience")}
 sx={{ backgroundColor: '#226A49' }}>
                            Apply Now
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 3,px:"5vw" }}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth label="Full Name" variant="outlined" style={{outlineColor:"#226A49"}} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth label="Email Address" variant="outlined" style={{outlineColor:"#226A49"}} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField fullWidth label="Phone Number" variant="outlined" style={{outlineColor:"#226A49"}} />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Cover Letter"
                  variant="outlined"
                  placeholder="Please let us know why you're interested in working with us! Thank you"
                  style={{outlineColor:"#226A49"}}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <Button variant="outlined" color="primary" component="label" sx={{ borderColor: '#226A49', color: '#226A49' }}>
                  Upload CV
                  <input type="file" hidden />
                </Button>
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <Button variant="contained" color="primary" sx={{ backgroundColor: '#226A49', mb: '2.5rem' }}>
                  Apply Now
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledContainer>
    );
  }
