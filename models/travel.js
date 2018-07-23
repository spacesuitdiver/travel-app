const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  location: { 
    type: String, 
    required: true 
  },

  date: { 
    type: Date, 
    default: Date.now, 
    required: true 
  },

  dates: {
    type: Date,
    required: true, 
  },

  flight: 
    { 
      type: String, 
      required: true 
    },

  hotel: { 
    type: String, 
    required: true 
  },

  days: [
    {
      date: new Date(),

    }
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

});

const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;
