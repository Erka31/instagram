const Route = require("express");
const likeRoute = Route();
const {
  like,
  unlike,
} = require("../controllers/likeController");

likeRoute.post("/like", like);
likeRoute.post("/unlike", unlike);

module.exports = likeRoute;
