const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`.yellow.bold);
});
