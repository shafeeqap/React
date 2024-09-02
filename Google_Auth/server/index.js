require('dotenv').config();
const express = require('express');
const cors = require('cors');
const passport = require("passport");
const session = require('express-session');
const userRouter = require('./routes/userRoutes');
const connectDB = require("./config/db");
require('./config/passport');
const PORT = process.env.PORT || 8080;

const app = express();
connectDB();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: { 
    //     secure: process.env.NODE_ENV === 'production',
    //     httpOnly: true,
    //     sameSite: 'none',
    // }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}));
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello World")
});

app.use("/auth", userRouter)

app.listen(PORT, () =>{
    console.log(`Server is running...http://localhost:${PORT}`);
    
});