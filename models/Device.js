import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
 status: {
  type: String,
  enum: ["online", "offline"],
  default: "offline"
},
 last_active_at: { type: Date, default: null },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Device", deviceSchema);

