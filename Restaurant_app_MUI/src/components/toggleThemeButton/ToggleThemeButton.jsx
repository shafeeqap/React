import { Button } from "@mui/material";
import { useColorMode } from "../../context/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

const ToggleThemeButton = () => {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} sx={{ color: "#ffffff" }}>
      {mode === "light" ? <NightlightIcon /> : <LightModeIcon />}
    </Button>
  );
};

export default ToggleThemeButton;
