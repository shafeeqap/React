import PropTypes from "prop-types";
import { LargeText, SmallText, TextFlexBox } from "./Ambience.styled";
import { Box } from "@mui/material";

const TextFlexBoxItems = ({ largeText, smallText }) => {
  return (
    <TextFlexBox>
      {largeText.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>{item}</LargeText>
          <SmallText>{smallText[index]}</SmallText>
        </Box>
      ))}
    </TextFlexBox>
  ); 
};

TextFlexBoxItems.propTypes = {
  largeText: PropTypes.arrayOf(PropTypes.node).isRequired,
  smallText: PropTypes.arrayOf(PropTypes.node).isRequired,
};
export default TextFlexBoxItems;
