import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { GuideBox } from "./Services.styled";
import PropTypes from "prop-types";

const GuideItems = ({ icons, guidesTitle, instructions }) => {
  return (
    <GuideBox>
      {icons.map((icon, index) => (
        <Box key={index} sx={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={icon} alt="buyIcon" />
          <Typography
            variant="body2"
            sx={(theme)=>({
              fontWeight: "500",
              fontSize: "20px",
              color: theme.palette.text.primary,
              my: 1,
            })}
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
  icons:PropTypes.arrayOf(PropTypes.node).isRequired,
  guidesTitle: PropTypes.arrayOf(PropTypes.node).isRequired,
  instructions: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default GuideItems;
