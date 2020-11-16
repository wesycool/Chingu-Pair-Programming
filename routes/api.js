const router = require("express").Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/assets/img/' })
const SavedImage = require("../models/index.js");


router.get("/api/get-image", (req,res) =>{
  SavedImage.find({}, (err, result) => {
    res.send(result)
  })
})

router.post("/api/post-image", upload.single('myImage'), ({file:{filename},body},res) => {
  SavedImage.create({filename, ...body})
  res.send('success')
})

module.exports = router;