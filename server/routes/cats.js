const express = require('express');
const router = express.Router();
const Cat = require('../models/cat');
const CatCtrl = require('../controller/cat-ctrl');

router.post('/create', (req, res, next) => {
  CatCtrl.addCat(req, res, next);
});

router.get('/read', (req, res, next) => {
  Cat.find({}, (err, todo) => {
    res.json(todo);
  })
});

router.put('/update', (req, res, next) => {
  CatCtrl.updateCat(req, res, next);
})

router.delete('/delete/:id', (req, res, next) => {
  CatCtrl.deleteCat(req, res, next);
});

module.exports = router;