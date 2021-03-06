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
  console.log("--------------------")
  console.log(response.data)
  res.send(response.data);
  return response;
};

const getDeliveries = async function (req, res, next) {
  const response = await apiCallGet(req, "/deliveries/");
  console.log("--------------------")
  console.log(response.data)
  res.send(response.data);
  return response;
}

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
    res.send(response.data)
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
    res.send(response.data);
    return response;
  } catch (e) {
    console.log("erreur");
    return e;
  }
};

const order = async function (req, res, next) {
  console.log('--------------------------------------')
  console.log(req.body)
  try {
    const response = await apiCallPost(
      req,
      '/orders',
      {
        user_id: req.body.data.user_id,
        delivery_address: req.body.data.delivery_address,
        billing_address: req.body.data.delivery_address,
        restaurant_id: req.body.data.restaurant_id0,
        product_ids: req.body.data.product_ids,
        price: req.body.data.price,
        payment_token: 'ejp9WgIVINlBL1QAl7AUDx36p',
      }
    )
    console.log(response)
  } catch (e) {
    console.log(e);
    return e;
  }
};

const getDeliveryAddress = async function (req, res, next) {
  try {
    const response = await apiCallGet(
      req,
      "/users/" + req.query.user_id + "/addresses/"
    );
    res.send(response.data)
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const updateOrder = async function (req, res, next) {
  const orderId = req.body.data.id;
  try {
    const response = await apiCallPut(req, '/orders/' + orderId, {
        deliveryman_id: req.body.data.deliveryman_id,
        status: req.body.data.newState,
    })
    console.log(response.data)
    res.send(response.data)
    return response
  }
  catch (e) {
    console.log(e);
    return e;
  }
};

const restorerAcceptOrder = async function (req, res, next) {
  const orderId = req.body.data.orderID;
  try {
    const response = await apiCallPut(req, '/orders/' + orderId, {
        data: {
          status: 'PREPARING'
        }
      })
    console.log(response.data);
    res.send(response.data);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const createNewAddress = async function (req, res, next) {
  try {
    const response = await apiCallPost(
      req,
      '/users/' + req.body.data.user_id + '/addresses',
      {data: {
        first_name: req.body.data.firstName,
        last_name: req.body.data.lastName,
        address: req.body.data.address,
        zipcode: req.body.data.zipcode,
        city: req.body.data.city,
        state: req.body.data.state,
        country: req.body.data.country,
        phone_number: req.body.data.phoneNumber,
        additional_info: req.body.data.infos,
        },
      });
      console.log(response.data)
      return response.data;
  } catch (e) {
    console.log(e)
  }
}

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
  getDeliveryAddress,
  updateOrder,
  restorerAcceptOrder,
  createNewAddress,
  getDeliveries,
};
