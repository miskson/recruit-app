import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);

mongoose.Promise = global.Promise;

const professionSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Profession =
  mongoose.models.Profession || mongoose.model("Profession", professionSchema);
export default Profession;
