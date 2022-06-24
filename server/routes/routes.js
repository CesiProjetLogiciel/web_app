const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.get('/restaurants', controller.getRestaurantsList)

router.get('/dishes', controller.getDishesList)

/* router.post('/', createProduct) 

router.put('/:productID', updateProduct) 

router.delete('/:productID', deleteProduct)*/

module.exports = router;