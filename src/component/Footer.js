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
    padding: "2.5vw 5vw",
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
    minWidth: "60%",
  },
});

const LowerFooter = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection:"column",
  alignItems: "center",
  paddingTop: "1rem",
  marginTop: "1rem",
  width: "100%",
  borderTop: "1px solid #226a49",
  "@media (min-width:600px)": {
    flexDirection:"row",
  },
});

const FooterTitle = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  fontWeight: "600",
  marginBottom: ".5rem",
  color: "#226a49",
});

const FooterBody = styled(Typography)({
  fontSize: "clamp(.7rem, 2vw, 1rem)",
  fontWeight: "400",
  marginBottom: ".5rem",
  color: "#226a49",
  opacity: ".7",
});

const FooterLink = styled(Link)({
  fontSize: "clamp(.7rem, 2vw, 1rem)",
  fontWeight: "400",
  marginBottom: ".5rem",
  color: "#226a49",
  opacity: ".8",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    opacity: "1",
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" sx={{order:{xs:"3", sm:"3"}}}>
      <FooterBody>
        {"© " +
          new Date().getFullYear() +
          " EcoThaili. All Rights Reserved. Website by "}
        <FooterLink> Team Inventrix </FooterLink>
      </FooterBody>
    </Typography>
  );
}

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (globalThis.location.pathname === "/") {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      globalThis.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    } else {
      globalThis.location.href = "/#" + sectionId;
    }
  };

  return (
    <StyledContainer maxWidth={false} id="f">
      <UpperFooter>
        <LogoSide>
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box>
              <img src={Ecothaili} style={logoStyle} alt="Ecothaili" />
            </Box>
            <FooterTitle variant="body2">Newsletter</FooterTitle>
            <FooterBody>
              Subscribe to our newsletter for weekly updates and promotions.
            </FooterBody>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                border="2px solid #226a49"
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
                  // style: { color: '#226A49', borderColor: '#226A49' } 
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ flexShrink: 0, bgcolor: "#226a49" }}
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
          <FooterTitle>EcoThaili</FooterTitle>
          <FooterLink onClick={() => scrollToSection("os")}>
            Our Story
          </FooterLink>
          <FooterLink onClick={() => scrollToSection("ps")}>
            Problem Statement
          </FooterLink>
          <FooterLink onClick={() => scrollToSection("mc")}>
            Material Composition
          </FooterLink>
          <FooterLink onClick={() => scrollToSection("mp")}>
            Manufacturing Process
          </FooterLink>
          <FooterLink onClick={() => scrollToSection("oi")}>
            Our Impact
          </FooterLink>

          <FooterLink onClick={() => scrollToSection("faq")}>FAQs</FooterLink>
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
          <FooterLink
            color="text.secondary"
            onClick={() => scrollToSection("a")}
          >
            About us
          </FooterLink>
          <FooterLink color="text.secondary" href="/career">Careers</FooterLink>
          <FooterLink color="text.secondary" href="/contact">
            Contact
          </FooterLink>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <FooterTitle>Legal</FooterTitle>
          <FooterLink color="text.secondary" href="/terms">
            Terms
          </FooterLink>
          <FooterLink color="text.secondary" href="/privacy">
            Privacy
          </FooterLink>
        </Box>
      </UpperFooter>
      <LowerFooter>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
            order:{xs:"1",sm:"1"}
          }}
        >
          <IconButton
            color="#226a49"
            target="_blank"
            href="https://github.com/Team-Inventrix"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <GitHubicon />
          </IconButton>

          <IconButton
            color="#226a49"
            target="_blank"
            href="https://www.linkedin.com/in/team-inventrix-9a35712b0/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            color="#226a49"
            target="_blank"
            href="https://www.youtube.com/@team-inventrix"
            aria-label="YouTube"
            sx={{ alignSelf: "center" }}
          >
            <YouTubeIcon />
          </IconButton>

          <IconButton
            color="#226a49"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61555879292763"
            aria-label="Facebook"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>

        <Copyright/>
        
        <Box sx={{order:{xs:"2", sm:"2"}}}>
          <FooterLink color="text.secondary" href="/privacy">
            Privacy Policy
          </FooterLink>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <FooterLink color="text.secondary" href="/terms">
            Terms of Service
          </FooterLink>
        </Box>
      </LowerFooter>
    </StyledContainer>
  );
}