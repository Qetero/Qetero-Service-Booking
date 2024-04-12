import mongoose from "mongoose";

const serviceProviderSchema = new mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
  uid: String,
  fullName: String,
  profilePicture: String,
  email: String,
  phoneNo: String,
  registeredOn: Date,
  lastSignInTime: Date,
  acountStatus: String,
});

export default mongoose.model("ServiceProvider", serviceProviderSchema);
