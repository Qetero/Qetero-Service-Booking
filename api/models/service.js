import mongoose from "mongoose";

const service = mongoose.Schema({
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
  name: String,
  duration: {
    hours: Number,
    minutes: Number,
  },
  price: mongoose.Decimal128,
  serviceProviders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceProvider",
    },
  ],
});

export default mongoose.model("Service", service);
