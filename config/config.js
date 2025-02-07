const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "fossil69",
  mongoUri:
    "mongodb+srv://dougscheible:fossil69@cluster0.n9nhf0f.mongodb.net/bookstore?retryWrites=true&w=majority&appName=Cluster0" ||
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/bookstore",
};

export default config;
