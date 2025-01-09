import { Box, styled, Typography } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

export const ImgContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  background: "linear-gradient(to right, #E1F5FE, #B3E5FC)",
  borderRadius: "15px",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));


export const TextFlexBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 5, 0, 5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(5),
  },
}));

export const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

export const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#7B8087",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));
