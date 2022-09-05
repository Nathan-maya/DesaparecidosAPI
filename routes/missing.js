const Missing = require('../models/Missing');
const router = require('express').Router();

router.post('/', async (req, res) => {
  const newMissing = new Missing({
    nome: req.body.nome,
    idade: req.body.idade,
    endereco: req.body.endereco,
    data: req.body.data,
    municipio: req.body.municipio,
    img: req.body.img,
  });
  try {
    const savedMissing = await newMissing.save();
    res.status(201).json(savedMissing);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
