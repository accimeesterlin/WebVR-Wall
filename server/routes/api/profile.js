const express = require('express');
const router = express.Router();
const profileController = require("../../controllers/profileController");
// const router = require("express").Router();

// matches with "/api/profile"
// here we are saying hey express -- everytime you go to "/"  
// which really means "api/profile" then go get FINDALL from MONGO
router.get("/", profileController.findAll);



// matches with "/api/profile/:id"
// here we are saying hey express -- everytime your url ends with ":id"  
// which really means "api/profile/:id" then go get FINDBYID from MONGO
router.get("/:id", profileController.findById);


router.post("/create", profileController.create);




module.exports = router;