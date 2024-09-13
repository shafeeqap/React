import { useContext } from "react";
import { userContext } from "../context/ContextProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, roles }) => {
  const { role, authenticated } = useContext(userContext);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProtectedRoute;
