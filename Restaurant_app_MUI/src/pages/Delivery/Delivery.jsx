import { Typography, Box } from "@mui/material";
import deliveryImg from "../../assets/assets-images/assets/DeliveryImg.png";
import CustomButton from "../../components/button/CustomButton";
import { CustomBox, CustomContainer, CustomText } from "./Delivery.styled";

const Delivery = () => {
  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <CustomText>Fast Home Delivery</CustomText>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#0D47A1",
              fontWeight: "800",
              my: 1,
              // fontFamily: "monospace",
            }}
          >
            Door to Door Delivery!
          </Typography>
          <CustomButton
            backgroundColor={"#0D47A1"}
            color={"#FFFFFF"}
            buttonText="Order Now"
          />
        </Box>
        <img src={deliveryImg} alt="deliveryImg" style={{ maxWidth: "100%" }} />
      </CustomContainer>
    </CustomBox>
  );
};

export default Delivery;
