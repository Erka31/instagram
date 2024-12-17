const Route = require("express");
const commentRoute = Route();
const { comment, uncomment } = require("../controllers/commentController")

commentRoute.post("/comment", comment);
commentRoute.post("/uncomment", uncomment);

module.exports = commentRoute;