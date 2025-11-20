const express = require("express");
const router = express.Router();
const {addDetails} = require("../controllers/detailsController");

//router for fetching info from frontend
router.post("/", addDetails);
module.exports = router;