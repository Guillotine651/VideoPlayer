import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userScheme = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  avatr: {
    type: String, //cloudinary url
    required: true,
  },
  coverImage: {
    type: String,
  },
  watchHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  Username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  password: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

//arrow function isliye use nhin kiya q key usmein aap this(current context) nhin use krkstey ...ayr async isliye q key time lgta encrypt wghra
userScheme.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hash(this.password, 10);
  next();
});

userScheme.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userScheme.methods.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIN: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userScheme.methods.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIN: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userScheme);
