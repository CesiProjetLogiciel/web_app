const express = require('express');
const router = express.Router();
const controller = require('../controllers/services');

router.get('/restaurants', controller.getRestaurantsList)

/*router.get('/:productID', getProduct)

router.post('/', createProduct) 

router.put('/:productID', updateProduct) 

router.delete('/:productID', deleteProduct)*/

module.exports = router;