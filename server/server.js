import config from "./../config/config";
import app from "./express";
import mongoose from "mongoose";

// Connection URL
mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log("MongoDB connection error:", err));
mongoose.connection.on("error", () => {
  throw new Error(
    `unable to connect to database, sorry billy: ${config.mongoUri}`
  );
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
