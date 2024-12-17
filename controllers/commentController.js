const commentModel = require("../models/commentSchema");
const postModel = require("../models/postSchema");

const comment = async (req, res) => {
  const { userId, comment, postId } = req.body;
  try {
    const newComment = await commentModel.create({
      comment,
      postId,
      userId,
    });
    await postModel.findByIdAndUpdate(postId, {
      $push: {
        comment: newComment._id,
      },
    });
    res.status(200).json(newComment);
  } catch (error) {
    throw new Error(error);
  }
};

const uncomment = async (req, res) => {
  const { userId, comment, postId } = req.body;
  try {
    const newComment = await commentModel.create({
      comment,
      postId,
      userId,
    });
    await postModel.findByIdAndUpdate(postId, {
      $pull: {
        comment: newComment._id,
      },
    });
    res.status(200).json(newComment);
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = { comment, uncomment };
