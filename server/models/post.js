const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  topic: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    default: '../../../assets/images/D_22-01.svg'
  },
  cat: {
    type: [mongoose.Schema.Types.ObjectId]
  },
  isUse: {
    type: Boolean,
    default: false
  }
},
  {
    timestamps: true
  })
const Post = mongoose.model('Post', PostSchema);
module.exports = Post;