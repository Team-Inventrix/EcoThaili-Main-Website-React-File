import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Ecothaili from "../image/logo/ecoThaili-color-logo-box.png";
import GitHubicon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styled } from "@mui/system";

const logoStyle = {
  width: "140px",
  height: "auto",
};

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem 1rem .3rem 1rem ",
  textAlign: "center",
  boxSizing: "border-box",
  width: "100%",
  "@media (min-width:600px)": {
    gap: "0.5rem",
    padding: "5rem 5rem .7rem 5rem",
    textAlign: "left",
  },
});

const UpperFooter = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "space-between",
  "@media (min-width:600px)": {
    flexDirection: "row",
  },
});

const LogoSide = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  minWidth: "100%",
  "@media (min-width:600px)": {
    minWidth: "60%"
  },
});

const LowerFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "1rem",
  marginTop: "1rem",
  width: "100%",
  borderTop: "1px solid #2B2B60",
});

const FooterTitle = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  fontWeight: "600",
  marginBottom: ".5rem",
  color:"#2B2B60",
})

const FooterBody = styled(Typography)({
  fontSize: "clamp(.7rem, 2vw, 1rem)",
  fontWeight: "400",
  marginBottom: ".5rem",
  color:"#2B2B60",
  opacity: ".7",
})

const FooterLink = styled(Link)({
  fontSize: "clamp(.7rem, 2vw, 1rem)",
  fontWeight: "400",
  marginBottom: ".5rem",
  color:"#2B2B60",
  opacity: ".7",
  textDecoration: "none",
  '&:hover': {
    opacity: "1"
  }
})

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      <FooterBody>
      {"Copyright © "}
      <FooterLink href="/">EcoThaili&nbsp;</FooterLink>
      {new Date().getFullYear()}
      </FooterBody>
    </Typography>
  );
}

export default function Footer() {
  return (
    <StyledContainer maxWidth={false}>
      <UpperFooter>
        <LogoSide>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box>
              <img src={Ecothaili} style={logoStyle} alt="Ecothaili" />
            </Box>
            <FooterTitle variant="body2">
              Newsletter
            </FooterTitle>
            <FooterBody>
              Subscribe to our newsletter for weekly updates and promotions.
            </FooterBody>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your email address"
                placeholder="Your email address"
                inputProps={{
                  autocomplete: "off",
                  ariaLabel: "Enter your email address",
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0, bgcolor:"#2B2B60" }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </LogoSide>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <FooterTitle>
            EcoThaili
          </FooterTitle>
          <FooterLink href="#os">
            Our Story
          </FooterLink>
          <FooterLink href="#pwas">
            Problem We are Solving
          </FooterLink>
          <FooterLink href="#mc">
            Material Composition
          </FooterLink>
          <FooterLink href="#oi">
            Our Impact
          </FooterLink>

          <FooterLink href="#faq">
            FAQs
          </FooterLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <FooterTitle variant="body2" fontWeight={600}>
            Company
          </FooterTitle>
          <FooterLink color="text.secondary" href="#a">
            About us
          </FooterLink>
          <FooterLink color="text.secondary">Careers (no page yet)</FooterLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <FooterTitle>
            Legal
          </FooterTitle>
          <FooterLink color="text.secondary" href="#">
            Terms
          </FooterLink>
          <FooterLink color="text.secondary" href="#">
            Privacy
          </FooterLink>
          <FooterLink color="text.secondary" href="#">
            Contact
          </FooterLink>
        </Box>
      </UpperFooter>
      <LowerFooter>
        <div>
          <FooterLink color="text.secondary" href="#">
            Privacy Policy
          </FooterLink>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <FooterLink color="text.secondary" href="#">
            Terms of Service
          </FooterLink>
        </div>

        <Copyright />
        {/* <ScrollLink to="os" smooth={true} duration={2000}>
          <Typography variant="body2" sx={footerLinkStyle}>
            Back to Top
          </Typography>
        </ScrollLink> */}

        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            target="_blank"
            href="https://github.com/Team-Inventrix"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <GitHubicon />
          </IconButton>

          <IconButton
            color="inherit"
            target="_blank"
            href="https://www.linkedin.com/in/team-inventrix-9a35712b0/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            color="inherit"
            target="_blank"
            href="https://www.youtube.com/@team-inventrix"
            aria-label="YouTube"
            sx={{ alignSelf: "center" }}
          >
            <YouTubeIcon />
          </IconButton>

          <IconButton
            color="inherit"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61555879292763"
            aria-label="Facebook"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </LowerFooter>
    </StyledContainer>
  );
}
