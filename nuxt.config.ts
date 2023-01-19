/*const dbName = "";
const modelName = "Offenders";
const mongoUser ="admin";
const mongoPassword ="nFzUj6IWX8y9FvcR";
const mongoIp ="learningcluster.bhg1u.mongodb.net";
const mongoOptions ="retryWrites=true&w=majority";*/
const dbName = process.env.dbName;
const modelName = process.env.modelName;
const mongoUser = process.env.displayMongoUser;
const mongoPassword = process.env.displayMongoPassword;
const mongoIp = process.env.mongoIp;
const mongoOptions =""
//const mongoUrl = `mongodb+srv://admin:nFzUj6IWX8y9FvcR@learningcluster.bhg1u.mongodb.net/${ dbName }?retryWrites=true&w=majority`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    //mongoUrl,
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
