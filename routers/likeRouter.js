const Route = require("express");
const likeRoute = Route();
const {
  like,
  unlike,
  checkLikeStatus,
} = require("../controllers/likeController");

likeRoute.post("/like", like);
likeRoute.post("/unlike", unlike);
likeRoute.post("/checkLikeStatus", checkLikeStatus);

module.exports = likeRoute;
