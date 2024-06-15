import { useEffect, useState } from "react";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

export default function Main() {
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
      <Home products={products} search={search} menu={menu}/>
      <Footer />
    </>
  );
}
