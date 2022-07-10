import GameModel from "../models/Game.js";
let Gamecontroller = {};

Gamecontroller.getAllGames = async (req, res) => {
  try {
    let games = await GameModel.find();
    res.status(200).json({ status: "succes", document: games });
    // TODO: handle 404
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

Gamecontroller.getOneGame = async (req, res) => {
  try {
    console.log(req);
    let game = await GameModel.findById(req.params.id);
    if (game) {
      res.status(200).json({ status: "succes", document: game });
      // TODO: handle 404
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

Gamecontroller.createGame = async (req, res) => {
  try {
    // await GameModel.init();
    let newGame = new GameModel(req.body);
    await newGame.save();
    res.status(201).json({ status: "succes", NEWdocument: newGame });
    // TODO handle db error
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

Gamecontroller.updateGame = async (req, res) => {
  try {
    let game = await GameModel.findById(req.params.id);
    if (game) {
      game.name = req.body.gameName;
      game.nbOfPlayers = req.body.nbOfPlayers;
      game.isHard = req.body.isHard;
      game.allowRedo = req.body.allowRedo;
      game.nbOfTry = req.body.nbOfTry;
      game.targetWord = req.body.targetWord;
      game.letters = req.body.letters;
      await game.save();
      res.status(200).json({ status: "succes", NEWdocument: game });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: "error", message: err.message });
  }
};

export default Gamecontroller;
