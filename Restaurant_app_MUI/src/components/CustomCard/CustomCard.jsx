import { Box, styled, Typography } from "@mui/material";

import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PropTypes from "prop-types";

const CustomCart = ({ img, price, item, likes, heart, share }) => {
  const DishBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0, 3, 0),
    },
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#E1F5FE",
    background: "linear-gradient(to right, #E1F5FE, #B3E5FC)",
    padding: theme.spacing(5),
    height: "200px",
  }));

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
              sx={{
                color: "#84d3f7",
                cursor: "pointer",
                "&:hover": {
                  color: "#1e88e5",
                },
              }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {likes}
            </Typography>
          </InfoBox>

          <InfoBox>
            <FavoriteBorderOutlinedIcon
              sx={{
                color: "#84d3f7",
                cursor: "pointer",
                "&:hover": {
                  color: "#1e88e5",
                },
              }}
            />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {heart}
            </Typography>
          </InfoBox>

          <InfoBox>
            <ShareOutlinedIcon
              sx={{
                color: "#84d3f7",
                cursor: "pointer",
                "&:hover": {
                  color: "#1e88e5",
                },
              }}
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
  likes: PropTypes.string,
  heart: PropTypes.string,
  share: PropTypes.string,
};
export default CustomCart;
