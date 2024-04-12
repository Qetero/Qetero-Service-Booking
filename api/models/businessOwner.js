import mongoose from "mongoose";

const businessOwnerSchema = mongoose.Schema({
  uid: String,
  TIN: String,
  fullName: String,
  profilePicture: String,
  email: String,
  phoneNo: String,
  registeredOn: Date,
  lastSignInTime: Date,
});

export default mongoose.model("BussinessOwner", businessOwnerSchema);
