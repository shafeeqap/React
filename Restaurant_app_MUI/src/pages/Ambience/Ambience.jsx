import { Typography, Box, Container, styled } from "@mui/material";
import ambience from "../../assets/assets-images/assets/ambience.png";
import {
  CustomBox,
  ImgContainer,
} from "./Ambience.styled";
import TextFlexBoxItems from "./TextFlexBoxItems";
import { large_Text, small_Text } from "../../constants/data";


const Ambience = () => {
  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={ambience} alt="ambience" style={{ maxWidth: "100%" }} />
          </ImgContainer>
          <Box>
            <Divider />
            <Typography
              sx={(theme)=>({
                fontSize: "35px",
                color: theme.palette.text.primary,
                fontWeight: "700",
                my: 3,
              })}
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
        </CustomBox>
        <TextFlexBoxItems largeText={large_Text} smallText={small_Text} />
      </Container>
    </Box>
  );
};

export default Ambience;
