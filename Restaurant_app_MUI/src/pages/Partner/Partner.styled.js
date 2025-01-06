import { Box, Container, styled } from "@mui/material";

export const CustomContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginBottom: theme.spacing(4),
  },
}));
