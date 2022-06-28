const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/restaurants', controller.getRestaurantsList)

router.get('/dishes', controller.getDishesList)

router.put('/modify', controller.modifyDish) 

router.post('/add', controller.addDish) 

router.get('/orders', controller.getOrders)

router.put('/modifyemail', controller.modifyEmail)

router.put('/modifypwd', controller.modifyPassword)

router.post('/clientorder', controller.order)

module.exports = router;