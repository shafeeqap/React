import React from "react";
import Navbar from "./Navbar";

const Theme = ({ theme, toggleTheme }) => {
  return (
    <>
      <div className="container">
        <header>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
        </header>
        <main>
          <div className="content">
            <h1>Theme Toggler</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              voluptate, cumque quisquam doloremque dicta magnam deleniti
              corporis, ad tenetur asperiores, consequatur minima voluptate
              commodi. Voluptas cumque dicta magnam deleniti corporis, ad
              tenetur asperiores, consequatur minima voluptate commodi. Voluptas
              cumque dicta magnam deleniti corporis, ad tenetur asperiores,
              consequatur minima voluptate commodi.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default Theme;
