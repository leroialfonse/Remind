const express = require("express");
const router = express.Router();
const exerciseController = require('../controllers/exerciseController')
<<<<<<< HEAD


// App Routes
router.get('/', exerciseController.getExercise)
router.put('/markFavorite', exerciseController.markFavorite )  //shooting from the hip here, not sure the route
// router.put('/exercises/:id/unfavorite',)
router.put('/markComplete', exerciseController.markComplete)
router.put('/markIncomplete', exerciseController.markIncomplete) // Here we go!
 // Here we go!

module.exports= router
=======
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get('/', exerciseController.getIndex)
router.get('/posts', ensureAuth, exerciseController.getExercise)
router.get('/add-video', ensureAuth, exerciseController.addVideo)
router.post('/add-video',ensureAuth, exerciseController.addVideoOnPost)
router.put('/markFavorite',ensureAuth, exerciseController.markFavorite)
router.put('/markNotFavorite',ensureAuth, exerciseController.markNotFavorite)
router.put('/markComplete',ensureAuth, exerciseController.markComplete)
router.put('/markinComplete',ensureAuth, exerciseController.markIncomplete)
router.get('/exercises', ensureAuth, exerciseController.exercisesPage)
router.get('/exercises/favorites',ensureAuth, exerciseController.favoritesPage)
router.get('/exercises/completed',ensureAuth, exerciseController.completedPage)
router.get('/exercises/new',ensureAuth, exerciseController.addExercisePage)
router.get('/exercises/:id',ensureAuth, exerciseController.exerciseDetails)

module.exports = router
>>>>>>> 1a1b333ee5ffdddb559276b9246099ec974378d0


