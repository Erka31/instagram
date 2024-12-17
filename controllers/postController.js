const postModel = require("../models/postSchema");
const userModel = require("../models/userSchema");

const posts = async (req, res) => {
  try {
    const posts = await postModel.find();
    console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
};

const postCreate = async (req, res) => {
  const { caption, postImg, userId, profileImg } = req.body;
  try {
    const createdPost = await postModel.create({
      profileImg,
      caption,
      postImg,
      userId,
    });
    await userModel.findByIdAndUpdate(userId, {
      $push: {
        posts: createdPost._id,
      },
    });
    res.status(200).json(createdPost);
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = { posts, postCreate };
