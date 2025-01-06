import { ArrowRightAlt } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { GuideBox } from "./Booking.styled"


const GuideItems = ({icon, guidesTitle, instructions}) => {
  return (
    <GuideBox>
    <img src={icon} alt="buyIcon" />
    <Typography
      variant="body2"
      sx={{
        fontWeight: "500",
        fontSize: "20px",
        color: "#3B3C45",
        my: 1,
      }}
    >
      {guidesTitle}
      {/* Order Guides */}
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
        {instructions}
        {/* How to order */}
      </Typography>
      <ArrowRightAlt style={{ color: "#0689FF" }} />
    </Box>
  </GuideBox>
  )
}

export default GuideItems