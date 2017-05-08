const mongoose = require('mongoose');

const CatSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})
const Cat = mongoose.model('Cat', CatSchema);
module.exports = Cat;