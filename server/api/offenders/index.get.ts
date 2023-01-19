import { offenders } from "~~/server/dbModels";


export default defineEventHandler( async () => {
  try {
    const result = await offenders.find({}, "-_id name phone email spotTime distance").lean();
    return result;
  } catch {
    return "error";
  }
})