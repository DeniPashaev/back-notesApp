const Texts = require("../models/texts.model");

module.exports.textController = {
  postTexts: async (req, res) => {
    try {
      const { name, title, time, price, point, count, completed } = req.body;

      const textic = await Texts.create({
        name,
        title,
        time,
        price,
        point,
        count,
        completed,
      });
      return res.json(textic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при создании заметки: " + error.toString(),
      });
    }
  },
  getTextsById: async (req, res) => {
    try {
      const textsic = await Texts.findById(req.params.id);
      return res.json(textsic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе текста по ID: " + error.message,
      });
    }
  },
  getAlltexts: async (req, res) => {
    try {
      const textic = await Notes.find();
      return res.json(textic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при выводе всех текстов: " + error.message,
      });
    }
  },
  deleteNote: async (req, res) => {
    try {
      const textsic = await Texts.findByIdAndDelete(req.params.id);
      return res.json(textsic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении: " + error.message,
      });
    }
  },
  pathTexts: async (req, res) => {
    try {
      await Texts.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        title: req.body.title,
        time: req.body.time,
        price: req.body.price,
        point: req.body.point,
        count: req.body.count,
        completed: cpmpleted.body.completed,
      });
      const textsic = await Notes.findById(req.params.id);
      return res.json(textsic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при удалении: " + error.message,
      });
    }
  },
};
