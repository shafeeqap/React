const express = require("express");
const cors = require('cors')
const messageRoute = require("./routes/messageRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api", messageRoute);

app.get("/", (req, res) => {
  res.send("Start Twilio App");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is Running: http://localhost:${PORT}`);
});
