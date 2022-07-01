import express from "express";

const routeur = express.Router();

// Routes
routeur.get("/", (req, res) => {
  console.log("GET /");
  res.send("Hi");
});

export default routeur;
