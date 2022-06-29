const axios = require("axios");
const { apiCallPost, apiCallDelete, apiCallGet, apiCallPut } = require("./gateway_api");

const APIPrefix = "http://localhost:3000";

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

/*const getRestaurantsListBis = async function (req, res, next) {
  let response = await axios.get(APIPrefix + "/api/restaurants/", {
    headers: { Authorization: "Bearer " },
  });
  res.send(response.data);
  return response;
};*/

const getRestaurantsList = async function (req, res, next) {
  try {
    let response = await apiCallGet(req, "/restaurants/");
    res.send(response.data);
    return response;
  } catch (e) {
    return e;
  }
};

const getDishesList = async function (req, res) {
  const param = req.query.id;
  let response = await apiCallGet(req, "/restaurants/" + param + "/products");
  res.send(response.data);
  return response;
};

const modifyDish = async function (req, res) {
  const idRestaurant = req.body.data.id;
  const idToModify = req.body.data.idToModify;
  try {
    const response = await apiCallPut(
      req, 
      "/restaurants/" + idRestaurant + "/products/" + idToModify,
      { body: { 
        name: req.body.data.name,
        description: req.body.data.description,
        price: req.body.data.price
      } }
    );
    res.send(response.data.result);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const addDish = async function (req, res) {
  try {
    const response = await apiCallPost(
      req,
      "/restaurants/" + req.body.data.id + "/products/",
      {data: {
        name: req.body.data.dishName,
        description: req.body.data.dishDescription,
        price: req.body.data.dishPrice,
        image: req.body.data.dishImage,
        },
      }
    );
    console.log(response.data)
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getOrders = async function (req, res, next) {
  const response = await apiCallGet(req, "/orders/");
  res.send(response.data);
};

const modifyEmail = async function (req, res, next) {
  const idParam = req.body.data.id;
  const newMail = req.body.data.email;
  try {
    const response = await apiCallPut(
      req,
      "/users/" + idParam,
      {body: {email: newMail}}
    );
    console.log(response.data)
    return response;
  } catch (e) {
    console.log("erreur");
    return e;
  }
};

const modifyPassword = async function (req, res, next) {
  const idParam = req.body.data.id;
  const newPwd = req.body.data.password;
  try {
    const response = await apiCallPut(
      req,
      "/users/" + idParam,
      {body: {password: newPwd}}
    );
    console.log(response.data);
    return response;
  } catch (e) {
    console.log("erreur");
    return e;
  }
};

const order = async function (req, res, next) {
  
};

module.exports = {
  createAddress,
  createRestaurant,
  getRestaurantsList,
  getDishesList,
  modifyDish,
  addDish,
  getOrders,
  modifyEmail,
  modifyPassword,
  order,
};
