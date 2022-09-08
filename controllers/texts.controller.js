const Texts = require("../models/texts.model");

module.exports.textController = {
  postTexts: async (req, res) => {
    try {
      const {name, title, time, price, point } = req.body;

      const textic = await Texts.create({
        name,
        title,
        time,
        price,
        point,
      });

      return res.json(textic);
    } catch (error) {
      return res.status(400).json({
        error: "Ошибка при создании заметки: " + error.toString(),
      });
    }
  },
}