import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1/tp");
    console.log(`Connected db - ${conn.connection.name} -`);
  } catch (error: any) {
    console.log(`Ocurrio un error :
error: ${error.message}`);
  }
};

export default connectDB;
