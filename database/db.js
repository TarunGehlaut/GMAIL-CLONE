import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const Connection = () => {
  const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-q4vbfeo-shard-00-00.uglyepn.mongodb.net:27017,ac-q4vbfeo-shard-00-01.uglyepn.mongodb.net:27017,ac-q4vbfeo-shard-00-02.uglyepn.mongodb.net:27017/?ssl=true&replicaSet=atlas-s14ts2-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    mongoose.connect(DB_URI, { useNewUrlParser: true });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error While connecting with the database ", error.message);
  }
};

export default Connection;
