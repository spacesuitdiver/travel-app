const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const travelSchema = new Schema({
  user: {
      username: '',
      password: '',
      loggedIn: true
  },
  trips: [
      {
          startDate: new Date(),
          endDate: new Date(),
          city: '',
          state: '',
          country: '',
          flightNumber: '',
          hotelNumber: '',
          averageTemperature: 98,
          weatherDescriptions: ['rainy', 'cloudy'],
          days: [{
              date: new Date(),
              // imageURL: '',
              pinterestObject: {}
          }]
      }
  ],
});



const Travel = mongoose.model("Travel", travelSchema);

module.exports = Travel;
