import PropTypes from "prop-types";
import { NavBarLinkType } from "./Navitem.styled";

const NavItem = ({ children, onClick }) => {
  return (
    <NavBarLinkType variant="body2" onClick={onClick}>
      {children}
    </NavBarLinkType>
  );
};

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default NavItem;
