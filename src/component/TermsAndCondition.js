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
  fontSize: "clamp(2rem, 4vw, 4rem)",
  margin: "3rem 0",
});

const Body = styled(Typography)({
  color: "#2B2B60",
  textAlign: "justify",
  fontSize: "clamp(1rem, 2vw, 1.5rem)",
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
export default function TermsAndCondition() {
  return (
    <StyledContainer id="os" maxWidth={false}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <Title component="h2" variant="h4">
            Terms of Service
          </Title>
          <Body variant="body1">
            <Description>
              Welcome to EcoThaili! These terms and conditions outline the rules
              and regulations for the use of EcoThaili's Website, located at
              www.team-inventrix.vercel.app.
            </Description>
            <Description>
              By accessing this website, we assume you accept these terms and
              conditions. Do not continue to use EcoThaili if you do not agree
              to take all of the terms and conditions stated on this page.
            </Description>
            <Description>
              The following terminology applies to these Terms and Conditions,
              Privacy Statement and Disclaimer Notice and all Agreements:
              "Client", "You" and "Your" refers to you, the person log on this
              website and compliant to the Company’s terms and conditions. "The
              Company", "Ourselves", "We", "Our" and "Us", refers to our
              Company. "Party", "Parties", or "Us", refers to both the Client
              and ourselves. All terms refer to the offer, acceptance, and
              consideration of payment necessary to undertake the process of our
              assistance to the Client in the most appropriate manner for the
              express purpose of meeting the Client’s needs in respect of
              provision of the Company’s stated services, in accordance with and
              subject to, prevailing law of Netherlands. Any use of the above
              terminology or other words in the singular, plural, capitalization
              and/or he/she or they, are taken as interchangeable and therefore
              as referring to same.
            </Description>

            <Heading> Cookies </Heading>
            <Description>
              We employ the use of cookies. By accessing EcoThaili, you agreed
              to use cookies in agreement with the EcoThaili's Privacy Policy.
            </Description>

            <Heading> License </Heading>
            <Description>
              Unless otherwise stated, EcoThaili and/or its licensors own the
              intellectual property rights for all material on EcoThaili. All
              intellectual property rights are reserved. You may access this
              from EcoThaili for your own personal use subjected to restrictions
              set in these terms and conditions.
            </Description>

            <Heading> You must not: </Heading>
            <Description>
              <SubUL>
                <li>Republish material from EcoThaili</li>
                <li>Sell, rent, or sub-license material from EcoThaili</li>
                <li>Reproduce, duplicate or copy material from EcoThaili</li>
                <li>Redistribute content from EcoThaili</li>
              </SubUL>
            </Description>
            <br></br>
            <Description>
              This Agreement shall begin on the date hereof.
            </Description>
            <Heading>
              Parts of this website offer an opportunity for users to post and
              exchange opinions and information in certain areas of the website.
              EcoThaili does not filter, edit, publish or review Comments prior
              to their presence on the website
            </Heading>
            <Description>
              Comments do not reflect the views and opinions of EcoThaili, its
              agents, and/or affiliates. Comments reflect the views and opinions
              of the person who posts their views and opinions. To the extent
              permitted by applicable laws, EcoThaili shall not be liable for
              the Comments or for any liability, damages, or expenses caused
              and/or suffered as a result of any use of and/or posting of and/or
              appearance of the Comments on this website.
            </Description>

            <Description>
              EcoThaili reserves the right to monitor all Comments and to remove
              any Comments which can be considered inappropriate, offensive, or
              causes breach of these Terms and Conditions.
            </Description>

            <Heading>You warrant and represent that:</Heading>
            <Description>
              <SubUL>
                <li>
                  You are entitled to post the Comments on our website and have
                  all necessary licenses and consents to do so;
                </li>
                <li>
                  The Comments do not invade any intellectual property right,
                  including without limitation copyright, patent, or trademark
                  of any third party;
                </li>
                <li>
                  The Comments do not contain any defamatory, libelous,
                  offensive, indecent, or otherwise unlawful material which is
                  an invasion of privacy
                </li>
                <li>
                  The Comments will not be used to solicit or promote business
                  or custom or present commercial activities or unlawful
                  activity.
                </li>
              </SubUL>
            </Description>

            <Heading>Reservation of Rights</Heading>
            <Description>
              We reserve the right to request that you remove all links or any
              particular link to our Website. You approve to immediately remove
              all links to our Website upon request. We also reserve the right
              to amend these terms and conditions and it’s linking policy at any
              time. By continuously linking to our Website, you agree to be
              bound to and follow these linking terms and conditions.
            </Description>

            <Heading>Removal of links from our website</Heading>
            <Description>
              If you find any link on our Website that is offensive for any
              reason, you are free to contact and inform us at any moment. We
              will consider requests to remove links but we are not obligated to
              or so or to respond to you directly.
            </Description>

            <Heading>Disclaimer</Heading>
            <Description>
              To the maximum extent permitted by applicable law, we exclude all
              representations, warranties, and conditions relating to our
              website and the use of this website. Nothing in this disclaimer
              will:
            </Description>
            <SubUL>
              <li>
                limit or exclude our or your liability for death or personal
                injury;
              </li>
              <li>
                limit or exclude our or your liability for fraud or fraudulent
                misrepresentation;
              </li>
              <li>
                limit any of our or your liabilities in any way that is not
                permitted under applicable law; or
              </li>
              <li>
                exclude any of our or your liabilities that may not be excluded
                under applicable law.
              </li>
            </SubUL>

            <Description>
              The limitations and prohibitions of liability set in this Section
              and elsewhere in this disclaimer: (a) are subject to the preceding
              paragraph; and (b) govern all liabilities arising under the
              disclaimer, including liabilities arising in contract, in tort,
              and for breach of statutory duty.
            </Description>

            <Description>
              As long as the website and the information and services on the
              website are provided free of charge, we will not be liable for any
              loss or damage of any nature.
            </Description>
          </Body>
        </Grid>
      </Grid>
    </StyledContainer>
  );
}
