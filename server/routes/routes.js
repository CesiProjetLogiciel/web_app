const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');
const { postRegister, postLogin } = require('../controllers/oauth.controller');

router.post('/register', postRegister)
router.post('/login', postLogin)

router.post('/addresses', controller.createAddress)

router.get('/restaurants', controller.getRestaurantsList)
router.post('/restaurants', controller.createRestaurant)

router.get('/dishes', controller.getDishesList)

/* router.post('/', createProduct) 

router.put('/:productID', updateProduct) 

router.delete('/:productID', deleteProduct)*/

module.exports = router;