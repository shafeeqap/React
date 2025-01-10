import { Box, styled, Typography } from "@mui/material";

export const CustomeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  gap: theme.spacing(5),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: theme.customStyles.typography,
  fontWeight: "bold",
  lineHeight: "0.9",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  flex: "1.25",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(0),
  },
}));
