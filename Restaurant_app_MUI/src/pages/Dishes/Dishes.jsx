import { Box, Container, styled, Typography } from "@mui/material";
import CustomCard from "../../components/CustomCard/CustomCard";
import { cardData } from "../../constants/data";

const Dishes = () => {
  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  const DishesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItem: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
            sx={{
              color: "#000339",
              fontSize: "35px",
              fontWeight: "bold",
              ml: "13px",
            }}
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
