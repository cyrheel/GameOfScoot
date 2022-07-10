// Import
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Model
export const PlayerSchema = new Schema({
  name: { type: String, required: true },
  passageOrder: { type: Number, required: true, min: 1 },
  letter: { type: String, required: false, default: "" },
  bonusTry: { type: Boolean, required: true, default: false },
  stats: {
    nbDef: { type: Number, min: 0 },
    nbFailedDef: { type: Number, min: 0 },
    nbCopied: { type: Number, min: 0 },
    nbFailedTry: { type: Number, min: 0 },
    nbLetterGiven: { type: Number, min: 0 },
  },
});

const Player = mongoose.model("player", PlayerSchema);
export default Player;
