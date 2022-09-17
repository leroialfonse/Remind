const express = require("express");
const router = express.Router();
const exerciseController = require('../controllers/exerciseController')


// App Routes
router.get('/', exerciseController.getExercise)
router.put('/markFavorite', exerciseController.markFavorite )  //shooting from the hip here, not sure the route
// router.put('/exercises/:id/unfavorite',)
router.put('/markComplete', exerciseController.markComplete)
router.put('/markIncomplete', exerciseController.markIncomplete) // Here we go!
 // Here we go!

module.exports= router


