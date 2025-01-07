import { Box, styled, Typography } from "@mui/material";
import likeIcon from "../../assets/assets-images/assets/like.png";
import heartIcon from "../../assets/assets-images/assets/heart.png";
import shareIcon from "../../assets/assets-images/assets/share.png";

const CustomCart = ({ img, price, item, likes, heart, share }) => {
  const DishBox = styled(Box)(({ theme }) => ({}));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImageContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <DishBox>
      <ImageContainer>
        <img src={img} alt="item-images" style={{ maxWidth: "100%" }} />
      </ImageContainer>
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          {price}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          {item}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>Like</InfoBox>
          <InfoBox>Heart</InfoBox>
          <InfoBox>Share</InfoBox>
        </Box>
      </Box>
    </DishBox>
  );
};

export default CustomCart;
