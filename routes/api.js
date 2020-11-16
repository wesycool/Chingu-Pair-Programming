const router = require("express").Router();
const multer  = require('multer')
const upload = multer({ dest: 'public/assets/img/' })
const SavedImage = require("../models/index.js");
// const upload = multer({ dest: 'uploads/' })


router.get("/api/get-image", (req,res) =>{
  SavedImage.find({}, (err, result) => {
    console.log(result)
    res.send(result)
  })
})

router.post("/api/post-image", upload.single('myImage'), ({file},res) => {
  SavedImage.create({file})
})

module.exports = router;