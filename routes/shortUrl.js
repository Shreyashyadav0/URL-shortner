const express = require('express');
const router = express.Router();
const {nanoid} = import("nanoid");

//post api call
router.post("/",async(req,res)=> {
  try{
    const{longUrl} =req.body;
    const shortID = nanoid(4)
  }catch(e){
    console.error(e);
    return res.status(500).send(e);
  }
})

module.exports = router;