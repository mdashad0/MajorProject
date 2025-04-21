const express = require("express");
const app=express();
const users=require("./routes/users");
const posts=require("./routes/posts");
const cookieParser=require("cookie-parser");
const session = require('express-session');
const flash=require("connect-flash");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));  

// app.use(cookieParser("secretCode"));
// app.get("/getsignedcookie",(req,res)=>{
//     res.cookie("made-in","india",{signed:true});
//     res.send("signed cookie sent");
// })

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/getcookies",(req,res)=>{
// res.cookie("greet","nameste");
// res.cookie("country","india");
// res.send("send you some cookies!");
// });
// app.get("/greet",(req,res)=>{
//     let{name="anonymous"}=req.cookies;
//     res.send(`hi name is:${name}`);
// })
// app.get("/",(req,res)=>{
//     console.log(req.cookies);
//     res.send("home route");
// });


// app.use("/users",users);
// app.use("/posts",posts);








// app.use(
//     session({
//     secret:"mysupersecretstring",
//     resave:false,
//      saveUninitialized:true
    
//     }));
//             or

const sessionOptions={
    secret:"mysupersecretstring",  
    resave:false,
    saveUninitialized:true,
} ;

app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.successMsg=req.flash("success");
    res.locals.errorMsg=req.flash("error");
    next();
});
app.get("/register",(req,res)=>{
    let{name="anonymous"}=req.query;
    req.session.name=name; 
    if(name==="anonymous"){
        req.flash("error","user not registered");
    }
    else{
        req.flash("success","user register sucessfully");
   
    }
      res.redirect("/hello");
});
app.get("/hello",(req,res)=>{

  
     
res.render("page.ejs",{name:req.session.name});
});
    // app.get("/reqcount",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }
//     else{
//         req.session.count=1;
//     }
//     res.send(`you sent a request ${req.session.count} times `);
// })



app.listen(3000,()=>{
    console.log("lstening on port 3000");
})