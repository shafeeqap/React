import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

export const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "0",
    flexDirection: "column",
  },
}));

export const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(25),
  alignItems: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    margin: theme.spacing(2, 0, 2, 0),
    gap: theme.spacing(15),
  },
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(2, 0, 2, 0),
    flexDirection: "column",
    gap: theme.spacing(5),
  },
}));
