import Food1 from "../assets/assets-images/assets/Food1.png";
import Food2 from "../assets/assets-images/assets/Food2.png";
import Food3 from "../assets/assets-images/assets/welcome-2.png";
import buyIcon from "../assets/assets-images/assets/buy_icon.png";
import rentIcon from "../assets/assets-images/assets/sell_icon.png";
import paymentIcon from "../assets/assets-images/assets/sell_icon.png";
import fbIcon from "../assets/assets-images/assets/facebook.png";
import twitter from "../assets/assets-images/assets/twitter.png";
import instagram from "../assets/assets-images/assets/instagram.png";

import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactsIcon from "@mui/icons-material/Contacts";

export const nav_items = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/dishes",
    display: "Dishes",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/about",
    display: "About Us",
  },
];

export const featuredItems = ["Guides", "Services", "Contact Us"];
export const overviewItems = [
  "Location",
  "Partnerships",
  "Terms of use & Privacy Policies",
];

export const cardData = [
  {
    id: "1",
    img: Food1,
    price: "3500",
    item: "Smoked Salman",
    likes: 2,
    heart: 2,
    share: 2000,
  },
  {
    id: "2",
    img: Food2,
    price: "3800",
    item: "Oysters Rockefeller.",
    likes: 4,
    heart: 2,
    share: 1500,
  },
  {
    id: "3",
    img: Food3,
    price: "4500",
    item: "Shawarma Pro",
    likes: 8,
    heart: 5,
    share: 2500,
  },
  {
    id: "4",
    img: Food3,
    price: "4500",
    item: "Shawarma Pro",
    likes: 8,
    heart: 5,
    share: 2500,
  },
  {
    id: "5",
    img: Food1,
    price: "4500",
    item: "Shawarma Pro",
    likes: 8,
    heart: 5,
    share: 2500,
  },
  {
    id: "6",
    img: Food2,
    price: "3500",
    item: "Smoked Salman",
    likes: 2,
    heart: 2,
    share: 2000,
  },
];

export const guidesTitle = ["Order Guides", "Booking Guides", "Payment Guides"];
export const instructions = ["How to order", "How to Book", "Payment Methode"];
export const serviceIcons = [buyIcon, rentIcon, paymentIcon];


export const large_Text = ["250+", "300+", "350+"];
export const small_Text = ["Dishes", "Trusted Clients", "Delivery Per Day"];

export const socialMediaIcons = [fbIcon, twitter, instagram];

export const icons = [
  <HomeIcon />,
  <FeaturedPlayListIcon />,
  <MiscellaneousServicesIcon />,
  <ContactsIcon />,
];
