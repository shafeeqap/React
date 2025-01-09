import { styled, Typography } from "@mui/material";

export const NavBarLinkType = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#FFFFFF",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#80DEEA",
    },
  }));
