import Header from "./components/header/Header";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./components/footer/Footer";
import Partner from "./pages/Partner/Partner";
import Booking from "./pages/Booking/Booking";

const App = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Partner />
      <Booking />
      <Footer />
    </>
  );
};

export default App;
