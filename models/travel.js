const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({

  _userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  startDate: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: false,
  },
  endDate: {
    type: Date,
    required: true
  },
  state: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: false,
  },
  hotel: {
    type: String,
    required: false,
  },
  averageTemperature: {
    type: String,
    required: false,
  },
  weatherDescriptions: {
    type: String,
    required: true,
    description: []
  },
  days: [{
    date: Date
  }],

  imageObject: {}
}
)


const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;
