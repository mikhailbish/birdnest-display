
const dbName = process.env.dbName;
const modelName = process.env.modelName;
const mongoUser = process.env.displayMongoUser;
const mongoPassword = process.env.displayMongoPassword;
const mongoIp = process.env.mongoIp;
const mongoOptions ="";

export default defineNuxtConfig({
  runtimeConfig: {

    mongoUser,
    mongoPassword,
    mongoIp,
    mongoOptions,
    modelName,
    dbName
  },
  nitro: {
    plugins: ["~/server/index.ts" ],
  }
})
