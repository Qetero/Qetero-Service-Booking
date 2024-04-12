import mongoose from "mongoose";

const businessTypeSchema = mongoose.Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  icon: { type: String },
  categories: [
    {
      name: { type: String },
      icon: { type: String },
    },
  ],
});

export default mongoose.model("BussinessType", businessTypeSchema);
