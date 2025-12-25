const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Get users");
});



router.get("/:id",(req,res)=>{
    res.send("Get for users id");
})


router.post("/",(req,res)=>{
    res.send(" POST  for users");
})


router.delete("/:id",(req,res)=>{
    res.send("Delete for Get users");
})


module.exports=router;
