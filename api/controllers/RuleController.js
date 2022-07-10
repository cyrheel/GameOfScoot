import RuleModel from "../models/Rule.js";
let Rulecontroller = {};

Rulecontroller.getAllRules = async (req, res) => {
  try {
    let rules = await RuleModel.find();
    res.status(200).json({ status: "succes", document: rules });
    // TODO: handle 404
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

Rulecontroller.getOneRule = async (req, res) => {
  try {
    let rule = await RuleModel.findById(req.params.id);
    if (rule) {
      res.status(200).json({ status: "succes", document: rule });
      // TODO: handle 404
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

Rulecontroller.createRule = async (req, res) => {
  try {
    let newRule = new RuleModel(req.body);
    await newRule.save();
    res.status(201).json({ status: "succes", NEWdocument: newRule });
    // TODO handle db error
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

Rulecontroller.updateRule = async (req, res) => {
  try {
    let rule = await RuleModel.findById(req.params.id);
    if (rule) {
      // game.name = req.body.gameName;
      // game.nbOfPlayers = req.body.nbOfPlayers;
      // game.isHard = req.body.isHard;
      // game.allowRedo = req.body.allowRedo;
      // game.nbOfTry = req.body.nbOfTry;
      // game.targetWord = req.body.targetWord;
      // game.letters = req.body.letters;
      await rule.save();
      res.status(200).json({ status: "succes", NEWdocument: rule });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

export default Rulecontroller;
