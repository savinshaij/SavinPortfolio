import mongoose from "mongoose";
//process.env.MONGODB_URI
const MONGODB_URI ="mongodb+srv://savinshaij3:msSt7rAJLOzpzlnQ@cluster0.dlhmunj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "testimonials_db",
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}
