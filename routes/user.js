const express = require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/WrapAsync.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/user.js");



router.route("/signup")
.get(userController.signupRender)
.post(wrapAsync(userController.signup));


router.route("/login")
.get(userController.loginRender)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),userController.login)

// router.get("/signup",userController.signupRender)

// router.post("/signup",wrapAsync(userController.signup));

// router.get("/login",userController.loginRender);
// router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),userController.login)

router.get("/logout",userController.logout);


module.exports=router;