const axios = require("axios");
const { apiCallPost } = require("./gateway_api");

const APIPrefix = 'http://localhost:3000'

const createAddress = async function (req, res, next) {
  var body = req.body;
    try {
        var response = await apiCallPost(req, `/users/${req.session.user_id}/addresses`, body);
        return res.status(response.status).send(response.data);
    } catch(e) {
        return res.status(500).send(e.message);
    }
}

const createRestaurant = async function (req, res, next) {
  var body = req.body;
    try {
        var response = await apiCallPost(req, "/restaurants", body);
        return res.status(response.status).send(response.data);
    } catch(e) {
        return res.status(500).send(e.message);
    }
}

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
  createAddress,
  createRestaurant,
  getRestaurantsList,
  getDishesList,
};
