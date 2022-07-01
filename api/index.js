import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
app.use();

app.listen(4000, () => {
  console.log("server started on port 4000");
});
