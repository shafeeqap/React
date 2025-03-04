import { Box, Typography } from "@mui/material";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PropTypes from "prop-types";
import { DishBox, ImageContainer, InfoBox } from "./CustomCard.styled";

const CustomCart = ({ img, price, item, likes, heart, share }) => {
  
  return (
    <DishBox>
      <ImageContainer>
        <img src={img} alt="item-images" style={{ maxWidth: "100%" }} />
      </ImageContainer>
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          &#8377; {price}
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
          <InfoBox>
            <ThumbUpOffAltOutlinedIcon
              sx={(theme)=>({
                color: theme.palette.mode === "light" ? "#0D47A1" : "#7a7878",
                cursor: "pointer",
                "&:hover": {
                  color: "#1e88e5",
                },
              })}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {likes}
            </Typography>
          </InfoBox>

          <InfoBox>
            <FavoriteBorderOutlinedIcon
              sx={(theme)=>({
                color: theme.palette.mode === "light" ? "#0D47A1" : "#7a7878",
                cursor: "pointer",
                "&:hover": {
                  color: "#1e88e5",
                },
              })}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {heart}
            </Typography>
          </InfoBox>

          <InfoBox>
            <ShareOutlinedIcon
              sx={(theme)=>({
                color: theme.palette.mode === "light" ? "#0D47A1" : "#7a7878",
                cursor: "pointer",
                "&:hover": {
                  color: "#1e88e5",
                },
              })}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {share}
            </Typography>
          </InfoBox>
        </Box>
      </Box>
    </DishBox>
  );
};

CustomCart.propTypes = {
  img: PropTypes.string,
  price: PropTypes.string,
  item: PropTypes.string,
  likes: PropTypes.number,
  heart: PropTypes.number,
  share: PropTypes.number,
};
export default CustomCart;
