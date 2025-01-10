import { ThemeProvider } from "./context/ThemeProvider";
import LayoutRoutes from "./Routes/LayoutRoutes";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <LayoutRoutes />
      </ThemeProvider>
    </>
  );
};

export default App;
