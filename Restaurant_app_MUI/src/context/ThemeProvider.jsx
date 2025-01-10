import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "../styles/theme";

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
