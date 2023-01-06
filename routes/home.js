// const express = require('express');
// const router = express.Router();
// const path = require('path'); //Provided by express to join path


// //here whatever is coming with / we are 
// // here when ever anyone with / url comes to this folder it is redirected to htmlPath which is joined by the path function 
// router.get('/',async(req, res) => {
  
//   const htmlPath = path.join(__dirname, 'public','index.html');
//   console.log('__dirName', __dirname,htmlPath);
//   res.sendFile(htmlPath);
// });

// module.export = router;
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',async(req,res)=>{
  const htmlPath =path.join(__dirname,'public','index.html');
  res.sendFile(htmlPath);
})
module.exports = router;