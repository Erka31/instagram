const Route = require("express");
const commentRoute = Route();
const {
  comment,
  uncomment,
  comments,
} = require("../controllers/commentController");

commentRoute.post("/comment/:postId", comment);
commentRoute.post("/uncomment", uncomment);
commentRoute.get("/getComment/:postId", comments);

module.exports = commentRoute;
