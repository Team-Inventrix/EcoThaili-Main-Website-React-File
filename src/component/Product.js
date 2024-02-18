import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BioThaili from "../image/products/bio-plastic.webp";
import BioGranuels from "../image/products/bio-granuels.webp";
import BioCellulos from "../image/products/bio-cellulos.webp";
import BioWrap from "../image/products/bio-wrap.webp";
import OrderIcon from "@mui/icons-material/ShoppingCart";
import Link from "@mui/material/Link";

const StyledContainer = styled(Container)({
  padding: "5rem 5vw",
  width: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
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

const ProductBoard = styled(Box)({
  display: "flex",
  margin: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "4rem",
  width: "80vw",
  "@media (min-width:600px)": {
    height: "max-content",
  },
});

const ProductContainer = styled(Box)({
  display: "flex",
  height: "max-content",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  background: "#cfcfed45",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px #0f166899",
});

const ProductImage = styled("img")({
  width: "100%",
  aspectRatio: "5/4",
  objectFit: "cover",
});

const ProductName = styled(Typography)({
  fontWeight: "bold",
  fontSize: "clamp(1rem, 2vw, 1.3rem)",
  color: "#2B2B60",
  textAlign: "center",
});

const Price = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  fontWeight: "200",
  color: "#2B2B60",
});

const BuyButton = styled(Button)({
  background: "#2B2B60",
  fontWeight: "bold",
  fontSize: "clamp(.7rem, 2vw, 1rem)",
  color: "white",
  "&:hover": {
    background: "#2b2b60bf",
  },
});

export default function OurStory() {
  return (
    <StyledContainer
      id="p"
      maxWidth={false}
      sx={{ minHeight: { sm: "100%", md: "100vh" } }}
    >
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Our Product
          </Title>
          <ProductBoard
            sx={{ width: { sm: "90vw" }, gap: { sm: "3.33vw", xs: "5vw" } }}
          >
            <ProductContainer
              sx={{
                height: { sm: "35vh", md: "50vh" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}
            >
              <ProductImage src={BioThaili} alt="Product" />
              <ProductName variant="h5" component="div">
                EcoThaili (इको थैली)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 250 per Roll
              </Price>
              <BuyButton variant="contained" sx={{ width: { xs: "100%" } }}>
                <Link
                  href="/signin"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Order Now ! &nbsp;
                </Link>
                <OrderIcon />
              </BuyButton>
            </ProductContainer>

            <ProductContainer
              sx={{
                height: { sm: "35vh", md: "50vh" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}
            >
              <ProductImage src={BioGranuels} alt="Product" />
              <ProductName variant="h5" component="div">
                EcoGranuels (इको ग्रान्युल्स)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 1000 per KG
              </Price>
              <BuyButton variant="contained" sx={{ width: { xs: "100%" } }}>
                <Link
                  href="/signin"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Order Now ! &nbsp;
                </Link>
                <OrderIcon />
              </BuyButton>
            </ProductContainer>

            <ProductContainer
              sx={{
                height: { sm: "35vh", md: "50vh" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}
            >
              <ProductImage src={BioCellulos} alt="Product" />
              <ProductName variant="h5" component="div">
                EcoCellulos (इको सेल्युलोस)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 2000 per KG
              </Price>
              <BuyButton variant="contained" sx={{ width: { xs: "100%" } }}>
                <Link
                  href="/signin"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Order Now ! &nbsp;
                </Link>
                <OrderIcon />
              </BuyButton>
            </ProductContainer>

            <ProductContainer
              sx={{
                height: { sm: "35vh", md: "50vh" },
                width: { md: "20vw", sm: "27.6vw", xs: "95vw" },
              }}
            >
              <ProductImage src={BioWrap} alt="Product" />
              <ProductName variant="h5" component="div">
                Eco Wrap (इको र्याप)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 20 per pice
              </Price>
              <BuyButton variant="contained" sx={{ width: { xs: "100%" } }}>
                <Link
                  href="/signin"
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Order Now ! &nbsp;
                </Link>
                <OrderIcon />
              </BuyButton>
            </ProductContainer>
          </ProductBoard>
          <a href="https://ecothaili-api.onrender.com/">
            <Typography
              style={{
                margin: "5vw auto 0 auto",
                cursor: "pointer",
                padding: "1vw 2vw",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                fontWeight: "600",
              }}
            >
              View More Products
            </Typography>
          </a>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
