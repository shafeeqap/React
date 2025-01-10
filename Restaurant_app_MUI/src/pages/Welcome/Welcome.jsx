import { Box, Typography, Container } from "@mui/material";
import welcomeImage from "../../assets/assets-images/assets/welcome-2.png";
import CustomButton from "../../components/button/CustomButton";
import { CustomeBox, ImageContainer, Title } from "./Welcome.styled";

const Welcome = () => {
  return (
    <Box sx={(theme) => ({
      backgroundColor: theme.customStyles.boxBackgroundColor,
      minHeight: "100vh",
      paddingY: "2rem",
    })}>
      <Container>
        <CustomeBox>
          <Box sx={{ flex: "1" }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#0D47A1",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to OCEAN FOOD Restorent
            </Typography>
            <Title variant="h1">
              Delicious seafood that tantalises your senses.
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#0D47A1", my: 2 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              quae. Laboriosam porro totam.
            </Typography>
            <CustomButton
              backgroundColor={"#0D47A1"}
              color={"#FFFFFF"}
              buttonText="More About Us"
              welcomBtn={true}
            />
          </Box>
          <ImageContainer >
            <img
              src={welcomeImage}
              alt="welcome"
              style={{ maxWidth: "100%" }}
            />
          </ImageContainer>
        </CustomeBox>
      </Container>
    </Box>
  );
};

export default Welcome;
