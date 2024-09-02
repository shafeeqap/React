import { useEffect, useState } from "react";
import MenuBar from "../Component/MenuBar/MenuBar";
import NavBar from "../Component/NavBar/NavBar";
import axios from "axios";
import Home from "../Component/Home/Home";
import Footer from "../Component/Footer/Footer";
import Posts from "../Component/Posts/Posts";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [menu, setMenu] = useState("");

  const getProduct = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <NavBar setSearch={setSearch} />
      <MenuBar setMenu={setMenu}/>
      <Posts/>
      <Home products={products} search={search} menu={menu}/>
      <Footer />
    </>
  );
}
