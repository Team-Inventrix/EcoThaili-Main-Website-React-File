import * as React from "react";

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
import LogoImg from "../image/logo/ecoThaili-color-logo.png";

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

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (globalThis.location.pathname === "/") {
      if (sectionId === "") {
        globalThis.location.href = "/";
      } else if (sectionElement) {
        const targetScroll = sectionElement.offsetTop - offset;
        sectionElement.scrollIntoView({ behavior: "smooth" });
        globalThis.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
        setOpen(false);
      }
    } else {
      if (sectionId === " ") {
        globalThis.location.href = "/";
      } else {
        globalThis.location.href = "/#" + sectionId;
      }
    }
  };

  return (
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
            <img
              src={LogoImg}
              style={logoStyle}
              alt="EcoThaili"
              onClick={() => scrollToSection("ms")}
            />
            <Box sx={{ display: { xs: "none", md: "flex", margin: "100px" } }}>
              <MenuItem
                onClick={() => scrollToSection("os")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  Our Story
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("pwas")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  Problem We are Solving
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("mc")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  Material Composition
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("mp")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  Manufacturing Process
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("oi")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  Our Impact
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("p")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  Product
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("faq")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  FAQ
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("a")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography
                  variant="body2"
                  color="#123648"
                  fontWeight="600"
                  fontSize="clamp(.8rem, 1vw, 1rem)"
                >
                  About
                </Typography>
              </MenuItem>
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
                <MenuItem onClick={() => scrollToSection("os")}>
                  Our Story
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("pwas")}>
                  problem We are Solving
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("mc")}>
                  Material Composition
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("oi")}>
                  Our Impact
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("p")}>
                  Product
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
                <MenuItem onClick={() => scrollToSection("a")}>About</MenuItem>
                <Divider />
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
