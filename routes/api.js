const express = require('express');

const router = new express.Router();

const db = require("../models/User");
const travelController = require("../controllers/travelController");



router.get('/travel', (req, res) => {
	console.log(req.user._id)
	res.status(200).json({
		message: "You're authorized to see this secret message.",
// user values passed through from auth middleware
		user: req.user
});
});

router.get('/:userId', (req, res) => {

	db.findById(req.params.userId)
	.then((userInfo) => {
		// console.log(userInfo)
		res.json({
			user: userInfo
		})
	})
	.catch(() => res.status(404).json({

	}))
});

router.get("/users", (req, res) => {
	db.find({})
	.then(function(userResponse){
		res.status(200).json(userResponse)
	})
})


//Get all travel from user 
router.get("/travel", travelController.findAllTravel);
//When one travel log is clicked
router.get("/travel/:travelId", travelController.findOneTravel);
//When submit new travel is clicked
router.post("/travel", travelController.createTravel);
//Edit travel
router.put("/travel/:travelId", travelController.editTravel);
//Delete travel
router.delete("/travel/:travelId", travelController.deleteTravel);

module.exports = router;
