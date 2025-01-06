import { FooterLink } from "./Footer.styled";
import PropTypes from "prop-types";

const FooterLinkItems = ({ children }) => {
  return <FooterLink>{children}</FooterLink>;
};

FooterLinkItems.propTypes +
  {
    children: PropTypes.node.isRequired,
  };

export default FooterLinkItems;
