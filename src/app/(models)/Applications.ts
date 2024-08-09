import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);

mongoose.Promise = global.Promise;

const applicationSchema = new Schema(
  {
    name: String,
    surname: String,
    age: String,
    experience: String,
    country_origin: String,
    e_mail: String,
    comment: String,
    profession: String,
  },
  {
    timestamps: true,
  }
);

const Application =
  mongoose.models.Application ||
  mongoose.model("Application", applicationSchema);
export default Application;
