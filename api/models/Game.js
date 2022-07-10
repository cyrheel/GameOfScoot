// Import
import mongoose from "mongoose";
import { PlayerSchema } from "./Player.js";
import { RuleSchema } from "./Rule.js";

const Schema = mongoose.Schema;

// Model
const GameSchema = new Schema({
  rules: { type: RuleSchema, default: () => ({}) },
  players: { type: [PlayerSchema], default: () => ({}) },
});

const game = mongoose.model("game", GameSchema);
export default game;
