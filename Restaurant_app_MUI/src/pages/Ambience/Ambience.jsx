import { Typography, Box, Container, Divider } from "@mui/material";
import ambience from "../../assets/assets-images/assets/ambience.png";
import {
  CustomeBox,
  ImgContainer,
  LargeText,
  SmallText,
  TextFlexBox,
} from "./Ambience.styled";

const Ambience = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomeBox>
          <ImgContainer>
            <img src={ambience} alt="ambience" style={{ maxWidth: "100%" }} />
          </ImgContainer>
          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              You&apos;ve found a ambience you love.
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#5A6473", lineHeight: "27px" }}
            >
              Discover the epitome of culinary excellence at Savoria, wher every
              visit is an enchanting rendezvouse with the art of dining.
            </Typography>
          </Box>
        </CustomeBox>

        <TextFlexBox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>250+</LargeText>
            <SmallText>Dishes</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>300+</LargeText>
            <SmallText>Trusted Clients</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>350+</LargeText>
            <SmallText>Delivery Per Day</SmallText>
          </Box>
        </TextFlexBox>
      </Container>
    </Box>
  );
};

export default Ambience;
