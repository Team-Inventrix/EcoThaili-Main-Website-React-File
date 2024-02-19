import * as React from "react";
import { Link } from "react-scroll";
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

const logoStyle = {
  width: "110px",
  height: "auto",
  cursor: "pointer",
};

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleSetActive = (to) => {
    console.log(to);
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
            >
              <Link
                to="ms"
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
              </Link>
              <Box
                sx={{ display: { xs: "none", md: "flex", margin: "100px" } }}
              >
                <Link
                  to="os"
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
                </Link>

                <Link
                  to="ps"
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
                </Link>

                <Link
                  to="mc"
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
                </Link>

                <Link
                  to="mp"
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
                </Link>

                <Link
                  to="oi"
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
                </Link>

                <Link
                  to="p"
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
                </Link>

                <Link
                  to="faq"
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
                </Link>

                <Link
                  to="a"
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
                </Link>
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
                    p: 2,
                    backgroundColor: "background.paper",
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      flexGrow: 1,
                    }}
                  ></Box>
                  <Link
                    to="os"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Our Story
                  </Link>
                  <Link
                    to="ps"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    problem Statement
                  </Link>
                  <Link
                    to="mc"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Material Composition
                  </Link>
                  <Link
                    to="oi"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Our Impact
                  </Link>
                  <Link
                    to="p"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Product
                  </Link>
                  <Link
                    to="faq"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="a"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Link>
                  <Divider />
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
