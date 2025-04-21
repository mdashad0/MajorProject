const express = require("express");
// const router = express.Router();
const router = express.Router({ mergeParams: true });
const wrapAsync=require("../utils/WrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const{reviewSchema}=require("../schema.js");
const Review =require("../models/review.js");
const Listing=require("../models/listing.js");

const { validateReview,isLoggedin,isReviewAuthor} = require("../middleware.js");
const reviewController=require("../controllers/review.js");

//reviews Post route
router.post("/",isLoggedin,validateReview,wrapAsync(reviewController.createReview));


//delete revies route
router.delete("/:reviewId",isLoggedin,isReviewAuthor,wrapAsync(reviewController.deleteReview));

module.exports=router;

