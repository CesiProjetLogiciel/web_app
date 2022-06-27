const axios = require('axios');

const APIPrefix = 'http://localhost:3000';

const getRestaurantsList = async function (req, res, next) {
  let response = await axios.get(APIPrefix + '/api/restaurants/', {
    headers: { Authorization: 'Bearer ' },
  });
  res.send(response.data);
  return response;
};

const getDishesList = async function (req, res) {
  const param = req.query.id;
  let response = await axios.get(
    APIPrefix + '/api/restaurants/' + param + '/products',
    { headers: { Authorization: 'Bearer ' } }
  );
  res.send(response.data);
  return response;
};

const modifyDish = async function (req, res) {
  const param = req.body.data.id;
  const idToModify = req.body.data.idToModify;
  
  try {
    let response = await axios.put(
      APIPrefix + '/api/restaurants/' + param + '/products/' + idToModify,
      { headers: { Authorization: 'Bearer ' } },
      { body: { price: req.body.newPrice } }
    );
    console.log(response.result);
    res.send(response.result);
    return response;
  } catch (e) {
    console.log(e);
  }
};

const addDish = async function (req, res) {
  try {
    const response = await axios.post(
      APIPrefix + '/api/restaurants/' + req.body.data.id + '/products/', {
      headers: { Authorization: 'Bearer '},
      data: {
        name: req.body.data.dishName,
        description: req.body.data.dishDescription,
        price: req.body.data.dishPrice,
        image: req.body.data.dishImage
      }
    })
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getRestaurantsList,
  getDishesList,
  modifyDish,
  addDish,
};
