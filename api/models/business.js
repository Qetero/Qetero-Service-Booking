import mongoose from "mongoose";

const businessSchema = mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusinessOwner",
  },
  businessSector: String,
  serviceType: String,
  name: String,
  about: String,
  images: [String],
  workingHours: [
    {
      day: {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      startTime: String,
      endTime: String,
    },
  ],
  location: {
    state: String,
    city: String,
    address: String,
    googleMapUrl: String,
    coordinates: {
      latitude: String,
      longitube: String,
    },
  },
});

export default mongoose.model("Bussiness", businessSchema);
