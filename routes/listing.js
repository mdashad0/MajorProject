const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/WrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedin,isOwner, validateListing } = require("../middleware.js");
const listingController=require("../controllers/listing.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });
router.route("/")
//index route
.get(wrapAsync(listingController.index))
// create route
.post( isLoggedin, upload.single("listing[image]"),validateListing, wrapAsync(listingController.createlistings));


//new route
router.get("/new", isLoggedin,listingController.renderNewForm );

router.route("/:id")
// show route
.get( wrapAsync(listingController.showListings))
//update route
.put( isLoggedin,isOwner,upload.single("listing[image]"),validateListing, wrapAsync(listingController.updatelistings))
//delete route
.delete( isLoggedin,isOwner,wrapAsync(listingController.deletelistings));














//index route
// router.get("/", wrapAsync(listingController.index));




// show route
// router.get("/:id", wrapAsync(listingController.showListings));

//create route 
// router.post("/",validateListing,wrapAsync(async(req,res)=>{

//         const newListing=new Listing(req.body.listing);
//         console.log(newListing);
//         await newListing.save();
//         req.flash("success","New Listing Created");
//         res.redirect("/listings");


//     }));

//or 

// // create route
// router.post("/", validateListing, isLoggedin, wrapAsync(listingController.createlistings));




//edit route
router.get("/:id/edit", isLoggedin,isOwner, wrapAsync(listingController.editlistings));


module.exports = router;