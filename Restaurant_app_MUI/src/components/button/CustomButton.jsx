import { styled, Button } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomBtn,
  guideBtn,
  getStartedBtn,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin:
        (welcomBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

CustomButton.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  welcomBtn: PropTypes.bool,
  guideBtn: PropTypes.bool,
  getStartedBtn: PropTypes.bool,
};
export default CustomButton;
