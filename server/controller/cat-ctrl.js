const Cat = require('../models/cat');

let CatCtrl = {
  addCat(req, res, next) {
    let newCat = new Cat({
      name: req.body.name
    })
    newCat.save((err, cat) => {
      if (err) {
        res.json({ success: false, msg: 'Failed to add cat' });
      } else {
        this.getAll((err, cat) => {
          res.json({ success: true, msg: 'Added cat success', cat: cat });
        });
      }
    });
  },
  deleteCat(req, res, next) {
    Cat.remove({ _id: req.params.id }, (err, cat) => {
      if (err) {
        res.json({ success: false, msg: 'Failed to delete cat' });
      } else {
        this.getAll((err, cat) => {
          res.json({ success: true, msg: 'Deleted cat success', cat: cat });
        });
      }
    });
  },
  getAll(callback) {
    Cat.find({}, callback);
  },
  updateCat(req, res, next) {
    Cat.findOneAndUpdate({ _id: req.body._id }, { success: req.body.success }, (err, cat) => {
      if (err) {
        throw err;
      } else {
        this.getAll((err, cat) => {
          res.json({ cat: cat });
        });
      }
    });
  }
}

module.exports = CatCtrl;