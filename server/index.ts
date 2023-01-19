import mongoose from "mongoose";

const { mongoUser, mongoPassword, mongoIp, mongoOptions, dbName} = useRuntimeConfig();
const mongoUrl = `mongodb+srv://${ mongoUser }:${ mongoPassword }@${ mongoIp }/${ dbName }?${ mongoOptions }`;
export default async () => {
  try {
    await mongoose.connect( mongoUrl );
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
}