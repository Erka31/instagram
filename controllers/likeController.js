
const postModel = require("../models/postSchema");

const like = async (req, res) => {
  const { userId, postId } = req.body;
  try {
    await postModel.findByIdAndUpdate(postId, {
      $addToSet: {
        like: userId,
      },
    });
    res.status(200).json(newLike);
  } catch (error) {
    throw new Error(error);
  }
};

const unlike = async (req, res) => {
  const { userId, postId } = req.body;
  try {
    await postModel.findByIdAndUpdate(postId, {
      $pull: {
        like: userId,
      },
    });
    res.status(200).json(newLike);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { like, unlike };
