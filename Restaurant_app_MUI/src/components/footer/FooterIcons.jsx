import PropTypes from "prop-types";

const FooterIcons = ({ children }) => {
  return (
    <img
      src={children}
      alt="Social_media_icons"
      style={{ cursor: "pointer" }}
    />
  );
};
FooterIcons.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default FooterIcons;
