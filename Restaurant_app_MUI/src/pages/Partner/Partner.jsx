import { Box, Container, Typography } from "@mui/material";
import logoImage from "../../assets/assets-images/assets/seafood-03.png";
import starsImage from "../../assets/assets-images/assets/Star.png";
import logosImg from "../../assets/assets-images/assets/logos.png";
import { CustomBox, CustomContainer } from "./Partner.styled";

const Partner = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <CustomContainer>
        <CustomBox>
          <img src={logoImage} alt="logo" style={{ minWidth: "30%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#83888b",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 1,
            }}
          >
            More than 45,000 trust OCEAN FOOD
          </Typography>
        </CustomBox>
        <Box>
          <img src={starsImage} alt="stars" style={{ maxWidth: "100%" }} />
          <Typography
            variant="body2"
            sx={{
              color: "#83888b",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2K+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <img src={logosImg} alt="logos" />
      </Container>
    </Box>
  );
};

export default Partner;
