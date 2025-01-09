import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home/Home";
import Dishes from "../pages/Dishes/Dishes";
import Services from "../pages/Services/Services";
import AboutPage from "../pages/AboutPage/AboutPage";
import NotFound from "../pages/NotFound/NotFound";

const LayoutRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default LayoutRoutes;
