import { Box, Container, Typography } from "@mui/material";
import CustomCard from "../../components/CustomCard/CustomCard";
import { cardData } from "../../constants/data";
import { DishesBox, PropertiesTextBox } from "./Dishes.styled";

const Dishes = () => {
  return (
    <Box
      sx={(theme) => ({
        mt: 8,
        backgroundColor: theme.palette.mode === "light" ? "#f0f2f4" : "#3C3D37",
        py: 5,
      })}
    >
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={(theme)=>({
              color: theme.palette.text.primary,
              fontSize: "35px",
              fontWeight: "bold",
              ml: "13px",
            })}
          >
            Featured Dishes
          </Typography>
          <Typography
            sx={{ color: "#5A6473", fontSize: "16px", mt: 1, ml: "13px" }}
          >
            Explore Variety of South Indian Dishes !
          </Typography>
        </PropertiesTextBox>

        <DishesBox>
          {cardData.map((item) => (
            <CustomCard
              key={item.id}
              img={item.img}
              price={item.price}
              item={item.item}
              likes={item.likes}
              heart={item.heart}
              share={item.share}
            />
          ))}
        </DishesBox>
      </Container>
    </Box>
  );
};

export default Dishes;
