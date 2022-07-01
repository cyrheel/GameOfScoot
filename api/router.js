import express from "express";

const routeur = express.Router();

// Routes
routeur.get("/", (req, res) => {
  res.send("Hi bitch");
});

export default routeur;
