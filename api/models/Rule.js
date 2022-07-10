// Import
import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Model
export const RuleSchema = new Schema({
  gameName: { type: String, required: true, default: "Game of Scoot" },
  nbOfPlayers: { type: Number, required: true, min: 2 },
  isHard: { type: Boolean, required: true, default: false },
  allowRedo: { type: Boolean, required: true, default: false },
  nbOfTry: { type: Number, required: false, min: 1 },
  targetWord: { type: String, required: true, default: "SCOOT" },
  letters: {
    type: [String],
    required: true,
    default: ["S", "C", "O", "O", "T"],
  },
});

const Rule = mongoose.model("rule", RuleSchema);
export default Rule;
