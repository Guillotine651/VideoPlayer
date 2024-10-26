import mongoose from "mongoose";

import { DB_name } from "../constants.js";

const connectdatabase = async () => {
  try {
    const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
    console.log(`\n Mongo db connected${connectioninstance}`);
  } catch (error) {
    console.error("OOPS", error);
    process.exit(1)
  }
};

export default connectdatabase