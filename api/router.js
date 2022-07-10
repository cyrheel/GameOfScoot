import express from "express";
import GameController from "./controllers/GameController.js";

const router = express.Router();

// GET
router.get("/api/game", GameController.getAllGames);
router.get("/api/game/:id", GameController.getOneGame);

// POST
router.post("/api/game", GameController.createGame);

// PATCH
router.patch("/api/game/:id", GameController.updateGame);

// DELETE
// router.delete("/api/game/:id", GameController.deleteGame);

export default router;
