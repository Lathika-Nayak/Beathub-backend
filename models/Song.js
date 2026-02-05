const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: Number,
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist'
  }
});

module.exports = mongoose.model('Song', songSchema);
