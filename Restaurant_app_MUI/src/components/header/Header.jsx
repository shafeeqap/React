import { Box, Drawer } from "@mui/material";
import NavItem from "../navItem/NavItem";
import { icons, nav_items } from "../../constants/data";
import Button from "../button/CustomButton";
import logoImage from "../../assets/assets-images/assets/seafood-03.png";
import {
  CustomeMenuIcon,
  HeaderWrapper,
  NavBarLinksBox,
  NavBarLogo,
} from "./Header.styled";
import { useState } from "react";
import DrawerList from "./DrawerList";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  const navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  return (
    <HeaderWrapper>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Mobile Menu */}
          <CustomeMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            <DrawerList
              onClose={toggleDrawer("left", false)}
              anchor="left"
              icons={icons}
              navigate={navigate}
            />
          </Drawer>
          <NavBarLogo src={logoImage} alt="Logo-image" />
        </Box>
        <NavBarLinksBox>
          {nav_items.map((item, index) => (
            <NavItem key={index} onClick={()=>navigate(item.path)}>{item.display}</NavItem>
          ))}
        </NavBarLinksBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginRight: "3rem",
        }}
      >
        <NavItem>Sign Up</NavItem>
        <Button
          backgroundColor={"#FFFFFF"}
          color={"#0D47A1"}
          buttonText="Register"
        />
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
