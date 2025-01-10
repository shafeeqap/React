import { Box, Typography } from "@mui/material";

import CustomButton from "../../components/button/CustomButton";
import { CustomBox, GuidesBox } from "./Services.styled";
import GuideItems from "./GuideItems";
import { guidesTitle, serviceIcons, instructions } from "../../constants/data";

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        mt: 10,
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
        sx={(theme) => ({
          fontSize: "35px",
          fontWeight: "bold",
          color: theme.palette.text.primary,
          my: 3,
        })}
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
          icons={serviceIcons}
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

export default Services;
