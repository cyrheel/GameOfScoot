import express from "express";
import GameController from "./controllers/GameController.js";
import RuleController from "./controllers/RuleController.js";

const router = express.Router();

// GET
router.get("/api/game", GameController.getAllGames);
router.get("/api/game/:id", GameController.getOneGame);
router.get("/api/rule", RuleController.getAllRules);
router.get("/api/rule/:id", RuleController.getOneRule);

// POST
router.post("/api/game", GameController.createGame);
router.post("/api/rule", RuleController.createRule);

// PATCH
router.patch("/api/game/:id", GameController.updateGame);

// DELETE
// router.delete("/api/game/:id", GameController.deleteGame);

export default router;
