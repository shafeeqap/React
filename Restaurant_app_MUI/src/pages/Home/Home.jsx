import Welcome from "../Welcome/Welcome";
import Partner from "../Partner/Partner";
import Booking from "../Services/Services";
import Dishes from "../Dishes/Dishes";
import Ambience from "../Ambience/Ambience";
import Delivery from "../Delivery/Delivery";

const Home = () => {
  return (
    <>
      <Welcome />
      <Partner />
      <Booking />
      <Dishes />
      <Ambience />
      <Delivery />
    </>
  );
};

export default Home;
