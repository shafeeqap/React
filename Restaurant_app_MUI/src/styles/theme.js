import { createTheme } from "@mui/material";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" },
            // background: { default: "#E1F5FE", paper: "#f5f5f5" },
            text: { primary: "#000000", secondary: "#4f4f4f" },
          }
        : {
            primary: { main: "#343434" },
            // background: { default: "#121212", paper: "#1e1e1e" },
            text: { primary: "#ffffff", secondary: "#aaaaaa" },
          }),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            ...(mode === "light"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#000",
                  // background: "linear-gradient(to right, #E1F5FE, #B3E5FC)",
                }
              : {
                  backgroundColor: "#52524f",
                  color: "#fff",
                  // background: "linear-gradient(to right, #2f2b2b, #1e1e1e)",
                }),
          },
        },
      },
    },
    customStyles: {
      ...(mode === "light"
        ? {
            boxBackgroundColor: "#E1F5FE",
            typography: "#000000",
            // boxGradient: "linear-gradient(to right, #E1F5FE, #B3E5FC)",
            imageContainerGradient:
              "linear-gradient(to right, #E1F5FE, #B3E5FC)",
          }
        : {
            boxBackgroundColor: "#121212",
            typography: "#FFFFFF",
            // boxGradient: "linear-gradient(to right, #2f2b2b, #1e1e1e)",
            imageContainerGradient:
              "linear-gradient(to right, #2f2b2b, #1e1e1e)",
          }),
    },
  });
