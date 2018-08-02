const db = require("../models");
const axios = require("axios");
const WEATHERAPI = "a385e638a6477656f3b41b4c0cdf8219";
const TUMBLRAPI = "fuiKNFp9vQFvjLNvx4sUwti4Yb5yGutBN4Xh10LXZhhRKjWlV4";

const fetchWeatherData = travel => {

  if (travel.state) {
    return axios(`http://api.openweathermap.org/data/2.5/weather?q=${travel.city},${travel.state}${travel.country}&appid=${WEATHERAPI}&units=metric`)
      .then(weatherData => {
        return {
          weather: weatherData.data,
          travel: travel
        }
      })
  }
  else {
    return axios(`http://api.openweathermap.org/data/2.5/weather?q=${travel.city},${travel.country}&appid=${WEATHERAPI}&units=metric`)
      .then(weatherData => {
        return {
          weather: weatherData.data,
          travel: travel
        }
      })
  }


  const fetchTumblrData = (travelAndWeather) => {
    const searchTerms = [];
    searchTerms.push("fashion");
    searchTerms.push(travelAndWeather.travel.city);


    // searchTerms.push(travelAndWeather.weather.weather[0].description)
    console.log(searchTerms.toString().split(/[ ,]+/).join("+"))


    return axios("https://api.tumblr.com/v2/tagged?tag=" + searchTerms.toString().split(/[ ,]+/).join("+") + "+&/posts?&api_key=" + TUMBLRAPI)
      .then(tumblrData => {
        return {
          tumblr: tumblrData.data.response,
          weather: travelAndWeather.weather,
          travel: travelAndWeather.travel
        }
      })
  };

  module.exports = {
    findAllTravel: (req, res) => {
      db.Travel
        .find(req.query)
        .sort({ date: -1 })
        .then(travels => res.json(travels))
        .catch(err => res.status(422).json(err));
    },
    createTravel: function (req, res) {
      db.Travel
        .create(req.body)
        .then(travel => res.json(travel))
        .catch(err => res.status(422).json(err));
    },
    findOneTravel: function (req, res) {
      db.Travel
        .findOne({ _id: req.params.travelId })
        .then(fetchWeatherData)
        .then(fetchTumblrData)
        .then(({ travel, weather, tumblr }) => res.json({
          travel, weather, tumblr
        }))
        .catch(err => res.status(422).json(err));
    },
    editTravel: (req, res) => {
      db.Travel.update(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    },
    deleteTravel: function (req, res) {
      db.Travel
        .findById({ _id: req.params.travelId })
        .then(travel => travel.remove())
        .then(travel => res.json(travel))
        .catch(err => res.status(422).json(err));
    }
  }
}