const postModel = require("../models/postSchema");

const like = async (req, res) => {
  const { userId, postId } = req.body;

  if (!userId || !postId) {
    return res.status(400).json({ error: "User ID and Post ID are required" });
  }

  try {
    const response = await postModel.findByIdAndUpdate(
      postId,
      {
        $addToSet: { likes: userId },
      },
      { new: true }
    );

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

const unlike = async (req, res) => {
  const { userId, postId } = req.body;

  if (!userId || !postId) {
    return res.status(400).json({ error: "User ID and Post ID are required" });
  }

  try {
    const response = await postModel.findByIdAndUpdate(postId, {
      $pull: { likes: userId },
    });

    res.json(response);
  } catch (err) {
    res.status(500).json(err);
  }
};

const checkLikeStatus = async (req, res) => {
  const { postId, userId } = req.body;

  if (!userId || !postId) {
    return res.status(400).json({ error: "User ID and Post ID are required" });
  }

  try {
    const post = await postModel.findById(postId);
    const isLiked = post.like.includes(userId);

    res.json({ isLiked });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { like, unlike, checkLikeStatus };
