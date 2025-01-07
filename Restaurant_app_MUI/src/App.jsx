import Header from "./components/header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./components/footer/Footer";
import Partner from "./pages/Partner/Partner";
import Booking from "./pages/Booking/Booking";
import Dishes from "./pages/Dishes/Dishes";

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Footer />
    </>
  );
};

export default App;
