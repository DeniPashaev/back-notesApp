const Texts = require("../models/texts.model");

module.exports.textController = {
  postTexts: async (req, res) => {
    try {
      const {name, title, time, price, point, count, completed } = req.body;

      const textic = await Texts.create({
        name,
        title,
        time,
        price,
        point,
        count,
        completed
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
}