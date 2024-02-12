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
import { Link as ScrollLink } from "react-scroll";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="/">EcoThaili&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const footerLinkStyle = {
  color: "text.secondary",
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
};

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        px: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
        boxShadow: "border-box",
        width: "100%",
      }}
      maxWidth={false}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <img src={Ecothaili} style={logoStyle} alt="Ecothaili" />
            </Box>
            <Typography variant="body2" fontWeight={600} gutterBottom>
              Newsletter
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Subscribe to our newsletter for weekly updates and promotions.
            </Typography>
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
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            EcoThaili
          </Typography>
          <Link color="text.secondary" href="#os">
            Our Story
          </Link>
          <Link color="text.secondary" href="#pwas">
            Problem We are Solving
          </Link>
          <Link color="text.secondary" href="#mc">
            Material Composition
          </Link>
          <Link color="text.secondary" href="#oi">
            Our Impact
          </Link>

          <Link color="text.secondary" href="#faq">
            FAQs
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Company
          </Typography>
          <Link color="text.secondary" href="#a">
            About us
          </Link>
          <Link color="text.secondary" >
            Careers (no page yet)
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Legal
          </Typography>
          <Link color="text.secondary" href="#">
            Terms
          </Link>
          <Link color="text.secondary" href="#">
            Privacy
          </Link>
          <Link color="text.secondary" href="#">
            Contact
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>

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
      </Box>
    </Container>
  );
}
