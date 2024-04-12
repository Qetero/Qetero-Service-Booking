import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  uid: String,
  fullName: String,
  profilePicture: String,
  email: String,
  phoneNo: String,
  registeredOn: Date,
  lastSignInTime: Date,
});

export default mongoose.model("Customer", customerSchema);
