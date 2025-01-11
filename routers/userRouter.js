const Route = require("express");
const {
  follow,
  signup,
  users,
  unfollow,
  oneUser,
} = require("../controllers/userController");
const userRoute = Route();

userRoute.post("/signup", signup);

userRoute.get("/users", users);

userRoute.post("/follow", follow);

userRoute.post("/unfollow", unfollow);

userRoute.get("/oneUser/:userId", oneUser);

module.exports = userRoute;
