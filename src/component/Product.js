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
import OrderIcon from "@mui/icons-material/ShoppingCart";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  minHeight: "100vh",
  width: "100%",
  margin: "auto",
  background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width:600px)": {
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#2B2B60",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "0 0 3rem 0",
});

const ProductBoard = styled(Box)({
  display: "flex",
  margin: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "4rem",
  width: "80vw",
  "@media (min-width:600px)": {
    height: "max-content",
  },
});

const ProductContainer = styled(Box)({
  display: "flex",
  height: "auto",
  width: "100%",
  maxWidth: "300px",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  background: "#cfcfed45",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px #0f166899",
  "@media (min-width:600px)": {
    width: "25%",
  },
});

const ProductImage = styled("img")({
  width: "100%",
  aspectRatio: "5/4",
  objectFit: "cover"
})

const ProductName = styled(Typography)({
  // background: "#2B2B60",
  fontWeight: "bold",
  fontSize: "clamp(1rem, 2vw, 1.3rem)",
  color: "#2B2B60",
});

const Price = styled(Typography)({
  // background: "#2B2B60",
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
    background: "#2b2b60bf", // Change the color when the button is hovered
  },
});

export default function OurStory() {
  return (
    <StyledContainer id="p" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Our Product
          </Title>
          <ProductBoard>
            <ProductContainer>
              <ProductImage
                src={BioThaili}
                alt="Product"
              />
              <ProductName variant="h5" component="div">
                EcoThaili (इको थैली)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 250 per Roll
              </Price>
              <BuyButton variant="contained">
                Order Now ! &nbsp; <OrderIcon />
              </BuyButton>
            </ProductContainer>

            <ProductContainer>
              <ProductImage
                src={BioGranuels}
                alt="Product"
              />
              <ProductName variant="h5" component="div">
                EcoGranuels (इको ग्रान्युल्स)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 1000 per KG
              </Price>
              <BuyButton variant="contained">
                Order Now ! &nbsp; <OrderIcon />
              </BuyButton>
            </ProductContainer>

            <ProductContainer>
              <ProductImage
                src={BioCellulos}
                alt="Product"
              />
              <ProductName variant="h5" component="div">
                EcoCellulos (इको सेल्युलोस)
              </ProductName>
              <Price variant="body1" color="primary">
                Rs. 2000 per KG
              </Price>
              <BuyButton variant="contained">
                Order Now ! &nbsp; <OrderIcon />
              </BuyButton>
            </ProductContainer>

          </ProductBoard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
