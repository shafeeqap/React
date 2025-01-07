import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { GuideBox } from "./Booking.styled";
import PropTypes from "prop-types";

const GuideItems = ({ icons, guidesTitle, instructions }) => {
  return (
    <GuideBox>
      {icons.map((icon, index) => (
        <Box key={index} sx={{ textAlign: "center", marginBottom: "20px" }}>
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
            {guidesTitle[index]}
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
              {instructions[index]}
            </Typography>
            <ArrowRightAlt style={{ color: "#0689FF" }} />
          </Box>
        </Box>
      ))}
    </GuideBox>
  );
};

GuideItems.propTypes={
  icons:PropTypes.string,
  guidesTitle: PropTypes.string,
  instructions: PropTypes.string,
}

export default GuideItems;
