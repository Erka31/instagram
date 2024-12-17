const { Schema, default:mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    profileImg: { type: String, required: true },
    bio: { type: String },
    posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
    following: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
