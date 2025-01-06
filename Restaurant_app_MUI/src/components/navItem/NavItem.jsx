import { styled, Typography } from "@mui/material";
import PropTypes from "prop-types";

const NavItem = ({ children }) => {
  const NavBarLinkType = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#80DEEA",
    },
  }));

  return <NavBarLinkType variant="body2">{children}</NavBarLinkType>;
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavItem;
