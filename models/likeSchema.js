const { Schema, default: mongoose } = require("mongoose");

const likeSchema = new Schema(
  {
    postId: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const likeModel = mongoose.model("Like", likeSchema);

module.exports = likeModel;