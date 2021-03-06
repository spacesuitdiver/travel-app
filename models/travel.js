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
  endDate: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true,
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
  packingList: [{
    type: String,
    required: false,
  }],
  imageObjects: [{
    id: {
      type: Number,
      required: false,
    },
    notes: {
      type: Array,
      required: false,
      description: []
  },
    tumblrImage: {
      type: String,
      required: false,
    }
  }]
}
)


const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;
