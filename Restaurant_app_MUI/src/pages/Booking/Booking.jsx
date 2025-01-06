import { Box, Typography } from "@mui/material";
import ArrowRightAlt from "@mui/icons-material/ArrowRightAlt";

import buyIcon from "../../assets/assets-images/assets/buy_icon.png";
import rentIcon from "../../assets/assets-images/assets/sell_icon.png";
import CustomButton from "../../components/button/CustomButton";
import { CustomBox, GuideBox, GuidesBox } from "./Booking.styled";

const icons =[buyIcon, rentIcon]
const guidesTitle=['Order Guides', 'Booking Guides', 'Payment Guides'];
const instructions=['How to order','How to Book','Payment Methode'];

const Booking = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        How to Book?
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you book for advance slot.
        </Typography>
      </CustomBox>

      <GuidesBox>
        <GuideBox>
          <img src={buyIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3C45",
              my: 1,
            }}
          >
            Order Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to order
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={rentIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3C45",
              my: 1,
            }}
          >
            Booking Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              How to Book
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={rentIcon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3C45",
              my: 1,
            }}
          >
            Payment Guides
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Payment Methode
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </GuideBox>
      </GuidesBox>

      <CustomButton
        backgroundColor={"#0D47A1"}
        color={"#FFFFFF"}
        buttonText="See Full Guides"
        welcomBtn={true}
      />
    </Box>
  );
};

export default Booking;
