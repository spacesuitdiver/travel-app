module.exports = function (passport) {
	const router = require('express').Router();
	const travelController = require("../controllers/travelController");

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
return router;
}

