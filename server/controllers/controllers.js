const axios = require("axios");

const APIPrefix = "http://localhost:3000";

const getRestaurantsList = async function (req, res, next) {
  let response = await axios.get(APIPrefix + "/api/restaurants/", {
    headers: { Authorization: "Bearer " },
  });
  res.send(response.data);
  return response;
};

const getDishesList = async function (req, res) {
  const param = req.query.id;
  let response = await axios.get(
    APIPrefix + "/api/restaurants/" + param + "/products",
    { headers: { Authorization: "Bearer " } }
  );
  res.send(response.data);
  return response;
};

const modifyDish = async function (req, res) {
  const param = req.body.data.id;
  const idToModify = req.body.data.idToModify;
  console.log(req.body.data)
  try {
    const response = await axios.put(
      APIPrefix + "/api/restaurants/" + param + "/products/" + idToModify,
      { headers: { Authorization: "Bearer " } },
      { body: { price: req.body.newPrice } }
    );
    res.send(response.data.result);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const addDish = async function (req, res) {
  try {
    const response = await axios.post(
      APIPrefix + "/api/restaurants/" + req.body.data.id + "/products/",
      {
        headers: { Authorization: "Bearer " },
        data: {
          name: req.body.data.dishName,
          description: req.body.data.dishDescription,
          price: req.body.data.dishPrice,
          image: req.body.data.dishImage,
        },
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const getOrders = async function (req, res, next) {
  // Needs a parameters to specify
  //const param = req.query.id;
  const response = await axios.get(APIPrefix + "/api/orders/", {
    headers: { Authorization: "Bearer " },
  });
  res.send(response.data);
};

const modifyEmail = async function (req, res, next) {
  const idParam = req.body.data.id;
  const newMail = req.body.data.email;
  try {
    const response = await axios.put(APIPrefix + "/api/users/" + idParam, {
      headers: { Authorization: "Bearer " },
      body: {
        email: newMail,
      },
    });
    console.log("good");
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
    const response = await axios.put(APIPrefix + "/api/users/" + idParam, {
      headers: { Authorization: "Bearer " },
      body: {
        password: newPwd,
      },
    });
    console.log("good");
    return response;
  } catch (e) {
    console.log("erreur");
    return e;
  }
}

module.exports = {
  getRestaurantsList,
  getDishesList,
  modifyDish,
  addDish,
  getOrders,
  modifyEmail,
  modifyPassword,
};
