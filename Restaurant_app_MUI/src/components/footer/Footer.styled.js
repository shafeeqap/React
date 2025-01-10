import { Box, Container, styled } from "@mui/material";

export const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  paddingTop: "50px",
  paddingBottom: "50px"
}));

export const CustomeContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  gap: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

export const FooterLink = styled("span")(() => ({
  fontSize: "15px",
  color: "#80DEEA",
  fontWeight: "300",
  fontFamily: "sans-serif",
  cursor: "pointer",
  "&:hover": {
    color: "#FFE0B2",
  },
}));

export const IconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));
