var express = require('express');
var router = express.Router();
let ingredientController = require('../controller/IngredientController');
let retailerController = require('../controller/retailerController');
let deleteController = require('../controller/deleteController');
let getStoreController = require('../controller/getStoreController');

router.get('/ingredients',ingredientController.getIngredientDetails);
router.post('/getStore',getStoreController.getStoreDetails);



//have to add this -Maneesha
router.post('/addstores',retailerController.postStoreDetails);
router.post('/deletestores',deleteController.getStoreDetails);

module.exports = router;
