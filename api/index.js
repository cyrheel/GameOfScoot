import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";
import router from "./router.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// SetUp & ENV V
const port = process.env.PORT || 4001;
const atlas_uri = process.env.ATLAS_URI;
const app = express();

// SetUp DB

let options = {
  keepAlive: true,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
};

mongoose.connect(atlas_uri, options, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected to AtlasCluster:gameofscootdb");
});

// Middleware
app.use(logger("dev"));
app.use(cors());
app.use(router);

app.listen(port, () => console.log("server started on port " + port));
