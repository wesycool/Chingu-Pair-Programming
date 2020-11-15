const router = require("express").Router();
const mongoose = require("mongoose");
const SavedImage = require("../models/index.js");
// const upload = multer({ dest: 'uploads/' })


router.get("/api/get-image", (req,res) =>{
  SavedImage.find({})
})

router.post("/api/post-image", upload.single('avatar'), ({body},res) => {
  console.log('get body',body);
  // res.send({msg: 'Message Received'});
  // SavedImage.create(body)
  // .then(dbSavedImage => {
  //   res.json(dbSavedImage);
  // })
  // .catch(err => {
  //   res.json(err);
  // });
})

module.exports = router;