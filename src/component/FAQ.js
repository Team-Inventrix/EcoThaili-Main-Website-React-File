import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  minheight: "100vh",
  width: "100%",
  background: "#2B2B60",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // zIndex:"-1",
  "@media (min-width:600px)": {
    padding: "10rem",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#EFEEEF",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  margin: "0 0 3rem 0",
});

const StyleAccordion = styled(Accordion)({
  background: "#f2f2f7e0",
});

const Body = styled(Typography)({
  color: "#EFEEEF",
  textAlign: "left",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.5",
  "@media (min-width:600px)": {
    textAlign: "left",
  },
});

const Question = styled(Typography)({
  color: "#2B2B60",
  textAlign: "left",
  fontWeight: "600",
  fontSize: "clamp(1rem, 2vw, 1.3rem)", // And here
  lineHeight: "1.5",
  "@media (min-width:600px)": {
    textAlign: "left",
  },
});

const Answer = styled(Typography)({
  color: "#2B2B60",
  textAlign: "left",
  fontWeight: "400",
  fontSize: "clamp(1rem, 2vw, 1.2rem)", // And here
  lineHeight: "1.5",
  margin: "0 .5rem ",
  "@media (min-width:600px)": {
    textAlign: "left",
    margin: "0 2rem ",
  },
});

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <StyledContainer id="faq" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Frequently asked questions
          </Title>
          <Body>
            <StyleAccordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Question>Where do EcoThaili products come from ?</Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer>
                  EcoThaili products are crafted from sustainably sourced banana
                  fiber. The banana trees are harvested, and the extracted
                  fibers along with natural additives and polymer are then
                  transformed into durable and eco-friendly bags.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Question>
                  Banana fiber? Is that from the banana peel ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer>
                  No, the banana fiber used in EcoThaili products comes from the
                  pseudostems of banana trees. These pseudostems are a byproduct
                  of banana cultivation, providing a sustainable source for our
                  bags.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Question>
                  Can these bags hold heavy items without tearing ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer>
                  Yes, EcoThaili bags are designed to be sturdy and durable.
                  They can easily hold heavy items without tearing, providing
                  both strength and reliability.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question>
                  Where can I purchase these EchoThaili bags ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  EcoThaili bags are available for purchase on our website
                  [https://team-inventrix.vercel.app/] and also available near
                  your shopping markets. You can explore our range of
                  eco-friendly products and make a sustainable choice.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question>Are these bags safe for food storage ?</Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  Yes, EcoThaili bags are safe for food storage. They are made
                  from natural and food-grade materials, ensuring that your food
                  remains safe and free from harmful contaminants. It is not
                  recommended to store cooked foods in direct contact with the
                  bags.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question component="h3" variant="subtitle2">
                  Can these bags be customized for promotional or branding
                  purposes ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  Absolutely! EcoThaili bags can be customized to meet your
                  promotional or branding needs. Contact us for more information
                  on customization options.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question component="h3" variant="subtitle2">
                  How can I be part of this mission ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  To join our mission for sustainability, you can support us by
                  purchasing EcoThaili products, spreading awareness about
                  eco-friendly living, or reaching out to explore potential
                  collaborations and tagging us in social netwroks. Contact us
                  for more ways to get involved.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question component="h3" variant="subtitle2">
                  Does this product need specific way for its decomposition ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  EcoThaili bags are designed to naturally decompose over time.
                  You can dispose of them in compost or follow local guidelines
                  for eco-friendly disposal.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question component="h3" variant="subtitle2">
                  How long this product long last generally ?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  It generally works very well up to 6 months, afterward it’s
                  recommended for dumping. The lifespan of EcoThaili products
                  depends on usage. Regular wear and tear won't compromise their
                  durability.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
            <StyleAccordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Question component="h3" variant="subtitle2">
                  Can be EchoThaili dumped into the recycling bin along with
                  normal plastics?
                </Question>
              </AccordionSummary>
              <AccordionDetails>
                <Answer
                  variant="body2"
                  gutterBottom
                  sx={{ maxWidth: { sm: "100%", md: "70%" } }}
                >
                  EcoThaili is not intended for standard plastic recycling bins.
                  For eco-friendly disposal, consider composting or follow local
                  guidelines for sustainable waste management.
                </Answer>
              </AccordionDetails>
            </StyleAccordion>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
