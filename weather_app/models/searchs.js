const axios = require("axios");
require("dotenv").config;

class Searchs {
  history = ["Madrid", "Malaga", "Berlin", "Londres", "Bogota"];

  constructor() {}

  async city(location = "") {
    //peticion http del location

    try {
      const resp = await axios.default.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?proximity=ip&types=place%2Cpostcode%2Caddress&language=es&access_token=${process.env.MAPBOX_KEY}`
      );
      
      const locations = resp.data.features.map((loc) => ({
        id: loc.id,
        name: loc.place_name,
        lng: loc.center[0],
        lat: loc.center[1]
      }));
      return locations;
    } catch (error) {
      return [];
    }
  }
}

module.exports = Searchs;
