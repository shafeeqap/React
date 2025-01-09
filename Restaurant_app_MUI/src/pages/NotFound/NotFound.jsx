import { Box, Typography } from "@mui/material";
import { CustomBox } from "./NotFound.styled";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
        mt: "75px",
        mb: "100px",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0, auto",
        }}
      ></div>
      <Typography
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#00039", my: 3 }}
      >
        404 : Page Not Found
      </Typography>
      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          We could not find what you were looking for.
        </Typography>
      </CustomBox>
    </Box>
  );
};

export default NotFound;
