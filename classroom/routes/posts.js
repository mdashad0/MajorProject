const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Get posts");
})



router.get("/:id",(req,res)=>{
    res.send("Get for post id");
})


router.post("/",(req,res)=>{
    res.send(" POST  for posts");
})


router.delete("/:id",(req,res)=>{
    res.send("Delete for Get posts");
})


module.exports=router;