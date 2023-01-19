import mongoose  from "mongoose";
const { modelName, dbName} = useRuntimeConfig();

const offendersSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true},
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  distance: { type: String, required: true },
  spotTime: { type: Date, expires: 600, required: true
}});
export default mongoose.model( modelName, offendersSchema, dbName );
