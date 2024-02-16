import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)({
  padding: "5rem 1.5rem",
  height: "100%",
  width: "100%",
  background: "#EFEEEF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "2",
  "@media (min-width:600px)": {
    padding: "5rem",
    minHeight: "100vh",
    textAlign: "center",
  },
});

const Title = styled(Typography)({
  color: "#2B2B60",
  textAlign: "center",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 4rem)", // Use clamp() here
  margin: "3rem 0",
});

const Body = styled(Typography)({
  color: "#2B2B60",
  textAlign: "justify",
  fontSize: "clamp(1rem, 2vw, 1.5rem)", // And here
  lineHeight: "1.7",
  "@media (min-width:600px)": {
    textAlign: "left",
  },
});

const Heading = styled(Typography)({
  fontSize: "clamp(1.6rem, 4vw, 3rem)",
  margin: "3.5rem 0 0 0",
  fontWeight: "bolder",
});

const SubHeading = styled(Typography)({
  fontSize: "clamp(1.3rem, 2vw, 2rem)",
  //   margin: "0 0 0 1rem",
  fontWeight: "bold",
  "@media (min-width:600px)": {
    margin: "2rem 0 2rem 1rem",
  },
});

const Description = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  marginBottom: ".7rem",
  marginTop: ".7rem",
});

const SubDescription = styled(Typography)({
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
  marginBottom: ".7rem",
  marginTop: ".7rem",
  marginLeft: "1rem",
});

const SubUL = styled("ul")({
  margin: "0 0 0 1.5rem",
  "@media (min-width:600px)": {
    margin: "0 0 0 3rem",
  },
});
export default function PrivacyPolicy() {
  return (
    <StyledContainer id="os" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Privacy Policy
          </Title>
          <Body variant="body1">
            <Description>
              This Privacy Policy describes how your personal information is
              collected, used, and shared when you visit or make a purchase from
              our website (the "Site").
            </Description>

            <Heading>PERSONAL INFORMATION WE COLLECT</Heading>
            <Description>
              When you visit the Site, we automatically collect certain
              information about your device, including information about your
              web browser, IP address, time zone, and some of the cookies that
              are installed on your device. Additionally, as you browse the
              Site, we collect information about the individual web pages or
              products that you view, what websites or search terms referred you
              to the Site, and information about how you interact with the Site.
              We refer to this automatically-collected information as "Device
              Information."
            </Description>
            <Description>
              "Cookies" are data files that are placed on your device or
              computer and often include an anonymous unique identifier. For
              more information about cookies, and how to disable cookies, visit
              http://www.allaboutcookies.org.
            </Description>
            <Description>
              "Log files" track actions occurring on the Site, and collect data
              including your IP address, browser type, Internet service
              provider, referring/exit pages, and date/time stamps. "Web
              beacons," "tags," and "pixels" are electronic files used to record
              information about how you browse the Site.
            </Description>
            <Description>
              Additionally, when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, billing address, shipping address,
              payment information (including credit card numbers), email
              address, and phone number. We refer to this information as "Order
              Information."
            </Description>

            <Heading> HOW DO WE USE YOUR PERSONAL INFORMATION? </Heading>
            <Description>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to:
            </Description>

            <Description>
              <SubUL>
                <li>Communicate with you;</li>
                <li>Screen our orders for potential risk or fraud; and</li>
                <li>
                  When in line with the preferences you have shared with us,
                  provide you with information or advertising relating to our
                  products or services.
                </li>
                <li>
                  We use the Device Information that we collect to help us
                  screen for potential risk and fraud (in particular, your IP
                  address), and more generally to improve and optimize our Site
                  (for example, by generating analytics about how our customers
                  browse and interact with the Site, and to assess the success
                  of our marketing and advertising campaigns).
                </li>
              </SubUL>
            </Description>

            <Heading> SHARING YOUR PERSONAL INFORMATION </Heading>
            <Description>
              We value your privacy and are committed to protecting your
              personal information. We do not share any of your personal
              information with any IT company. We have implemented measures to
              ensure that your data is secure and used only for the purposes you
              have consented to.
            </Description>

            <Description>
              Finally, we may also share your Personal Information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant, or other lawful request for information we
              receive, or to otherwise protect our rights.
            </Description>

            <Heading> DO NOT TRACK </Heading>
            <Description>
              Please note that we do not alter our Site's data collection and
              use practices when we see a Do Not Track signal from your browser.
            </Description>

            <Heading>YOUR RIGHTS</Heading>
            <Description>
              If you are a European resident, you have the right to access the
              personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted. If you
              would like to exercise this right, please contact us through the
              contact information below.
            </Description>

            <Description>
              Additionally, if you are a European resident we note that we are
              processing your information in order to fulfill contracts we might
              have with you (for example if you make an order through the Site),
              or otherwise to pursue our legitimate business interests listed
              above. Additionally, please note that your information will be
              transferred outside of Europe, including to Canada and the United
              States.
            </Description>

            <Heading>DATA RETENTION</Heading>
            <Description>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </Description>

            <Heading>CHANGES</Heading>
            <Description>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </Description>

            <Heading>CONTACT US</Heading>
            <Description>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e-mail at [team-inventrix@gmail.com] or by mail
              using the details provided below:
            </Description>

            <Description>ASCOL Lainchowr,Kathmandu</Description>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
