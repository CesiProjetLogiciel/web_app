const axios = require("axios");

const APIPrefix = 'http://localhost:3000'

const getRestaurantsList = async function (req, res, next) {
  let response = await axios.get(APIPrefix + "/api/restaurants/", { headers: { Authorization: "Bearer "} });
  res.send(response.data);
  return response;
};

const getDishesList = async function (req, res) {
  const param = req.query.id;
  let response = await axios.get(APIPrefix + "/api/restaurants/" + param + "/products", { headers: { Authorization: "Bearer "} });
  res.send(response.data);
  return response;
};

module.exports = {
  getRestaurantsList,
  getDishesList,
};
