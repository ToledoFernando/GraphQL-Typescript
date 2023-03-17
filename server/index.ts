console.clear();
import connectDB from "./src/db";
import { startApollo } from "./src/app";

connectDB();
startApollo();
