const { Schema, default: mongoose } = require("mongoose");

const postSchema = new Schema(
  {
    profileImg: { type: String, required: true },
    caption: { type: String, required: true },
    postImg: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
    comment: [{ type: mongoose.Types.ObjectId, ref: "Comment", required: true }],
    like: [{ type: mongoose.Types.ObjectId, ref: "User", required: true }],
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
