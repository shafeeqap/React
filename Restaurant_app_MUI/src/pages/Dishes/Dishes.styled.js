import { Box, styled } from "@mui/material";

export const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  export const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap", 
    gap: theme.spacing(3), 
    marginTop: theme.spacing(5),
    "& > *": {
      flex: "1 1 calc(25% - 24px)", // Default for large screens (lg): 4 cards per line
      maxWidth: "calc(25% - 24px)",
    },
    [theme.breakpoints.down("lg")]: {
      "& > *": {
        flex: "1 1 calc(50% - 24px)", // For medium screens (md): 2 cards per line
        maxWidth: "calc(50% - 24px)",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& > *": {
        flex: "1 1 100%", // For small screens (sm): 1 card per line
        maxWidth: "100%",
      },
    },
  }));
