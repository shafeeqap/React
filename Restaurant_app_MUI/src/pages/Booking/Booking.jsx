import { Box, Typography } from "@mui/material";
import buyIcon from "../../assets/assets-images/assets/buy_icon.png";
import rentIcon from "../../assets/assets-images/assets/sell_icon.png";
import paymentIcon from "../../assets/assets-images/assets/sell_icon.png";
import CustomButton from "../../components/button/CustomButton";
import { CustomBox, GuidesBox } from "./Booking.styled";
import GuideItems from "./GuideItems";

const icons = [buyIcon, rentIcon, paymentIcon];
const guidesTitle = ["Order Guides", "Booking Guides", "Payment Guides"];
const instructions = ["How to order", "How to Book", "Payment Methode"];

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
          width: "100px",
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
        <GuideItems
          icons={icons}
          guidesTitle={guidesTitle}
          instructions={instructions}
        />
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
