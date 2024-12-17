const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')

const userRoute = require("./routers/userRouter");
const postRoute = require("./routers/postRouter");
const commentRoute = require("./routers/commentRouter");
const likeRoute = require("./routers/likeRouter");

const app = express();
dotenv.config()
app.use(cors())
app.use(express.json());

app.use(userRoute);
app.use(postRoute);
app.use(commentRoute);
app.use(likeRoute);

const connecTDataBase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aagiiaagiieegiiegii:kJTgQ7hh8b14tXwE@cluster0.xbteb.mongodb.net/instagram?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};

connecTDataBase();

app.listen(8080, console.log("running on 8080"));
