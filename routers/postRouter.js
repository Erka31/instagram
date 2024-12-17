const Route = require("express");
const authMiddleware = require("../Auth-Middleware");

const { posts, postCreate } = require("../controllers/postController");

const postRoute = Route();

postRoute.get("/posts", authMiddleware, posts);

postRoute.post("/post/create", authMiddleware, postCreate);

module.exports = postRoute;
