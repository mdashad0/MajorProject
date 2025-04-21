const Listing =require("../models/listing");
// Import the whole library
const maptilerClient=require("@maptiler/client");
maptilerClient.config.apiKey = process.env.MAP_TOKEN;


module.exports.index=async (req, res) => {

    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });


};

module.exports.renderNewForm=(req, res) => {

    res.render("listings/new.ejs");
};


module.exports.showListings=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    if (!listing) {
        req.flash("error", "listing you requested for does not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};

module.exports.createlistings=async (req, res,next) => {
// in an async function, or as a 'thenable':
const result = await maptilerClient.geocoding.forward(req.body.listing.location,{limit: 1});
    // console.log(result.features[0].geometry);
    let url=req.file.path;
    let filename=req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
   newListing.image={url,filename};
   newListing.geometry=result.features[0].geometry
 
   let savedListing= await newListing.save();
   console.log(savedListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
};
module.exports.editlistings=async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    
    if (!listing) {
        req.flash("error", "listing you requested for does not exist!");
        res.redirect("/listings");
    }
    const imageHeight = 250; 
    const imageWidth = 220;
let originalImageUrl=listing.image.url;
originalImageUrl=originalImageUrl.replace("/upload","/upload/h_250,w_220");
    res.render("listings/edit.ejs", { listing,originalImageUrl,imageHeight,imageWidth });
};

module.exports.updatelistings=async (req, res) => {
    let { id } = req.params;
    if (!req.body.listing) {
        throw new ExpressError(400, "send valid data for listing");
    }
  
   let listing= await Listing.findByIdAndUpdate(id, { ...req.body.listing });
   if(typeof req.file!=="undefined")
    { let url=req.file.path;
    let filename=req.file.filename;
    listing.image={url,filename};
    await listing.save();
   }
    req.flash("success", " Listing updated");
    res.redirect(`/listings/${id}`);


};

module.exports.deletelistings=async (req, res) => {
    let { id } = req.params;
    console.log(id);
    let deleteListing = await Listing.findByIdAndDelete(id);
    console.log(deleteListing);
    req.flash("success", " Listing deleted");
    res.redirect("/listings");
};