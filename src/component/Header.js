import * as React from "react";
import { Link as ScrollLink} from "react-scroll";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import LogoImg from "../image/logo/ecoThaili-color-logo.webp";
import Link from "@mui/material/Link";

const logoStyle = {
  width: "110px",
  height: "auto",
  cursor: "pointer",
};

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const homepageComponent = [
    "hs",
    "os",
    "ps",
    "mc",
    "mp",
    "oi",
    "op",
    "faq",
    "a",
  ];

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
      return;
    }
  
    if (globalThis.location.pathname === "/") {
      if (sectionId === "") {
        globalThis.location.href = "/";
      } else {
        globalThis.location.href = "/#" + sectionId;
      }
    } else {
      if (!homepageComponent.includes(sectionId)) {
        globalThis.location.href = `/${sectionId}`;
      } else {
        globalThis.location.href = "/#" + sectionId;
      }
    }
  };
  

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: ".5rem",
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(255, 255, 255, 0.4)"
                  : "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",

              boxShadow:
                theme.palette.mode === "light"
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                ml: "-18px",
                margin: "20px",
                px: 0,
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ScrollLink
                to="hs"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
                activeClass="activeImg"
                style={{
                  color: "#123648",
                  fontWeight: "600",
                  fontSize: "clamp(.8rem, 1vw, 1rem)",
                }}
              >
                <img src={LogoImg} style={logoStyle} alt="EcoThaili" />
              </ScrollLink>
              <Box
                sx={{ display: { xs: "none", md: "flex", margin: "100px 0" } }}
              >
                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("os")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    Our Story
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("ps")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    Problem Statement
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("mc")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    Material Composition
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("mp")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    Manufacturing Process
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("oi")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    Our Impact
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("p")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    Product
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("faq")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    FAQ
                  </MenuItem>
                </ScrollLink>

                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  sx={{
                    py: "6px",
                    px: "12px",
                    border: "3px solid transparent",
                    "&:hover": {
                      borderBottomColor: "#226a49",
                    },
                  }}
                  onClick={() => scrollToSection("a")}
                >
                  <MenuItem
                    style={{
                      color: "#123648",
                      fontWeight: "600",
                      fontSize: "clamp(.8rem, 1vw, 1rem)",
                    }}
                    activeClass="active"
                  >
                    About
                  </MenuItem>
                </ScrollLink>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 0.5,
                alignItems: "center",
              }}
            ></Box>
            <Box sx={{ display: { sm: "", md: "none" } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "30px", p: "4px" }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 3,
                    backgroundColor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3vw",
                    alignItems: "end",
                    flexGrow: 1,
                    fontSize: "clamp(1rem, 3vw, 3rem)",
                  }}
                >
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("os")}
                  >
                    Our Story
                  </ScrollLink>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("ps")}
                  >
                    problem Statement
                  </ScrollLink>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("mc")}
                  >
                    Material Composition
                  </ScrollLink>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("oi")}
                  >
                    Our Impact
                  </ScrollLink>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("p")}
                  >
                    Product
                  </ScrollLink>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("faq")}
                  >
                    FAQ
                  </ScrollLink>
                  <ScrollLink
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    onClick={() => scrollToSection("a")}
                  >
                    About
                  </ScrollLink>
                </Box>
                <Divider />
                <Box
                  sx={{
                    minWidth: "60dvw",
                    p: 3,
                    backgroundColor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    gap: "3vw",
                    alignItems: "end",
                    flexGrow: 1,
                    fontSize: "clamp(1rem, 3vw, 3rem)",
                  }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    href="/career"
                  >
                    Careers
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    href="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    href="/terms"
                  >
                    Terms & Services
                  </Link>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    activeClass="active"
                    p="1rem"
                    href="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
