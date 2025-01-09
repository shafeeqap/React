import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { nav_items } from "../../constants/data";
import PropTypes from "prop-types";

const DrawerList = ({ onClose, anchor, icons, navigate }) => {
  return (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {nav_items.map((item, index) => (
          <ListItem key={index} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>{icons[index]}</ListItemIcon>
              <ListItemText primary={item.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

DrawerList.propTypes = {
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.string,
  icons: PropTypes.arrayOf(PropTypes.node).isRequired,
  navigate: PropTypes.func.isRequired,
};
export default DrawerList;
