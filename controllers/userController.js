const userModel = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { username, password, email, profileImg } = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);
    const response = await userModel.create({
      username,
      password: hashedpassword,
      email,
      profileImg,
    });

    
    const token = jwt.sign(
      {
        userId: response._id,
        username: response.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    res.status(201).json({token});
  } catch (error) {
    res.status(500).json({ message: `failed to create user ${error}` });
  }
};

const users = async (req, res) => {
  try {
    const users = await userModel.find().populate("posts", "caption postImg");
    res.send(users);
  } catch (error) {
    throw new Error(error);
  }
};

const follow = async (req, res) => {
  const { followingUserId, followedUserId } = req.body;
  if (followingUserId === followedUserId)
    throw new Error("can't follow yourself");
  try {
    await userModel.findByIdAndUpdate(followedUserId, {
      $addToSet: {
        following: followingUserId,
      },
    });
    await userModel.findByIdAndUpdate(followingUserId, {
      $addToSet: {
        followers: followedUserId,
      },
    });
    res.status(200).json("done");
  } catch (error) {
    throw new Error(error);
  }
};

const unfollow = async (req, res) => {
  const { followingUserId, followedUserId } = req.body;
  if (followingUserId === followedUserId)
    throw new Error("can't follow yourself");
  try {
    await userModel.findByIdAndUpdate(followedUserId, {
      $pull: {
        following: followingUserId,
      },
    });
    await userModel.findByIdAndUpdate(followingUserId, {
      $pull: {
        followers: followedUserId,
      },
    });
    res.status(200).json("done");
  } catch (error) {
    throw new Error(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

   await userModel.create({username, password: hashedPassword,})

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

module.exports = { follow, signup, users, unfollow, register };