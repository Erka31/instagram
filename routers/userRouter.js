const Route = require("express");
const {
  follow,
  signup,
  users,
  unfollow,
  register,
} = require("../controllers/userController");
const userRoute = Route();

userRoute.post("/signup", signup);

userRoute.get("/users", users);

userRoute.post("/follow", follow);

userRoute.post("/unfollow", unfollow);

userRoute.post("/register", register);

module.exports = userRoute;
