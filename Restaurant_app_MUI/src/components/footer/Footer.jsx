import { Box, Typography } from "@mui/material";

import { CustomeContainer, IconBox } from "./Footer.styled";
import FooterLinkItems from "./FooterLinkItems";
import FooterIcons from "./FooterIcons";
import { featuredItems, overviewItems, socialMediaIcons } from "../../constants/data";


const Footer = () => {

  return (
    <Box sx={{ py: 10, backgroundColor: "#0D47A1" }}>
      <CustomeContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FFFFFF",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Featured
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {featuredItems.map((item, index) => (
              <FooterLinkItems key={index}>{item}</FooterLinkItems>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FFFFFF",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Overview
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {overviewItems.map((item, index) => (
              <FooterLinkItems key={index}>{item}</FooterLinkItems>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#FFFFFF",
              fontWeight: "700",
              mb: 2,
            }}
          >
            Get in touch
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#b1b3b4",
              fontWeight: "500",
              mb: 2,
            }}
          >
            Keep in touch with our social media pages.
          </Typography>
          <IconBox>
            {socialMediaIcons.map((item, index) => (
              <FooterIcons key={index}>{item}</FooterIcons>
            ))}
          </IconBox>
        </Box>
      </CustomeContainer>
    </Box>
  );
};

export default Footer;
