const { Schema, default: mongoose } = require("mongoose");

const commentSchema = new Schema(
  {
    comment: { type: String, required: true },
    postId: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comment", commentSchema);

module.exports = commentModel;
