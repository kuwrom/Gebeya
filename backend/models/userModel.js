import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      Type: String,
      required: true,
    },
    email: {
      Type: String,
      required: true,
      unique: true,
    },
    password: {
      Type: String,
      required: true,
    },
    isAdmin: {
      Type: Boolean,
      required: true,
      default: false,
    },
  },
  { timeseries: true }
);

const User = mongoose.model("User", userSchema);

export default User;
