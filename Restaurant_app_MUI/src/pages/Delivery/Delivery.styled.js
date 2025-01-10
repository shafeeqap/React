import { Box, Container, styled, Typography } from "@mui/material";

export const CustomContainer = styled(Container)(({ theme }) => ({
  background: theme.customStyles.imageContainerGradient,
  height: "416px",
  borderRadius: "15px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(5, 3, 3, 3),
    width: "90%",
  },
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0, 10, 0),
  margin: theme.spacing(0, 2, 5, 2),
  [theme.breakpoints.down("md")]: {
    padding: 0,
  },
}));

export const CustomText = styled(Typography)(({ theme }) => ({
  fontSize: "35px",
  color: "#",
  fontWeight: "700",
//   fontFamily: "monospace",
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
  },
}));
