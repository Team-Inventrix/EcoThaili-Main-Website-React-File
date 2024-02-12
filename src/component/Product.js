import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BioThaili from "../image/products/bio-plastic.webp";
import OrderIcon from "@mui/icons-material/ShoppingCart";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  height: "100%",
  width: "100%",
  background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '@media (min-width:600px)': {
    padding: "15rem",
    height: "100vh",
    textAlign: "center"
  },
});

const Title = styled(Typography)({
  color: "#2B2B60",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "3rem 0",
});

const ProductContainer = styled(Box)({
  display: "flex",
  height:"auto",
  width:"100%",
  flexDirection: "column",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  background: "#cfcfed45",
  borderRadius: "1rem",
  boxShadow: "0 4px 6px #0f166899",
  '@media (min-width:600px)': {
    width:"25%",
  },
});

const ProductName = styled(Typography)({
  // background: "#2B2B60",
  fontWeight: "bold",
  fontSize: "clamp(1rem, 2vw, 1.3rem)",
  color: "#2B2B60", 
})

const Price = styled(Typography)({
  // background: "#2B2B60",
  fontSize: "clamp(1rem, 2vw, 1.2rem)",
  fontWeight: "200",
  color: "#2B2B60", 
})

const BuyButton = styled(Button)({
  background: "#2B2B60",
  fontWeight: "bold",
  fontSize: "clamp(.7rem, 2vw, 1rem)",
  color: "white", 
  '&:hover': {
    background: "#2b2b60bf", // Change the color when the button is hovered
  },
})

export default function OurStory() {
  return (
    <StyledContainer id="p" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Our Product
          </Title>
          <ProductContainer>
            {/* Replace with your product image */}
            <img src={BioThaili} alt="Product" style={{ width: '100%', objectFit: 'cover' }} />
            <ProductName variant="h5" component="div">
              BioThaili (बायो थैली)
            </ProductName>
            <Price variant="body1" color="primary">
              Rs. 250 per Roll
            </Price>
            <BuyButton variant="contained"> {/* Use BuyButton here */}
              Order Now ! &nbsp;<OrderIcon />
            </BuyButton>
          </ProductContainer>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
