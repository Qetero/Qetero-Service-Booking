import mongoose from "mongoose";

const userMappingSchema = new mongoose.Schema({
  uid: { type: String, unique: true },
  collectionName: String,
});

export default mongoose.model("UserMapping", userMappingSchema);
