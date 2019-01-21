const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yelpKamp = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
})

const Campground = mongoose.model('YelpKamp', yelpKamp)

module.exports = Campground