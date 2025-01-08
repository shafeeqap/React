import { Box, styled } from "@mui/material";

export const DishBox = styled(Box)(({ theme }) => ({
    // borderTopLeftRadius: "10px",
    // borderTopRightRadius: "10px",
    maxWidth: 350,
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(3, 0, 3, 0),
    },
    "&:hover": {
      backgroundColor: "#f5f5f5",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      transform: "scale(1.05)",
      transition: "all 0.3s ease-in-out",
    },
  }));

  export const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  export const ImageContainer = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#E1F5FE",
    background: "linear-gradient(to right, #E1F5FE, #B3E5FC)",
    padding: theme.spacing(5),
    height: "200px",
  }));
