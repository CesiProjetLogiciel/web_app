const axios = require("axios");

const getRestaurantsList = async function (req, res, next) {
  let response = await axios.get("http://localhost:3000/api/restaurants/", { headers: { Authorization: "Bearer "} });
  res.send(response.data);
};

const getDishesList = async function (req, res) {
  console.log("controller reached");
};

module.exports = {
  getRestaurantsList,
  getDishesList,
};
