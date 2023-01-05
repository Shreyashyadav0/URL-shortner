// const express = require('express'); // this is us telling that we require express here
// const app= express(); // then we put it into a variable 
// const shortUrl = require('./routes/url'); // Now here comes the interesting part, we are just requiring the routes/url here
// const homeRoutes = require('./routes/home');// we are just exporting the required things here whiech we have made somewhere else

// //middlewares
// //these are called before the api call

// app.use(express.json());  // Here we are excepting the json file
// app.use(express.static("public"));// Here we are making Public folder public so that it can be excecces by everyone
// app.use(express.urlencoded({ extended: false}));// here we are accepting the body
// app.use('/urlapi', shortUrl); //here we are redirecting whatever is coming with /urlapi to shortUrl function 
// app.use('/',homeRoutes);// here we are redirecting whatever is coming with / to homeRoutes ,as we have seen in general url with /



// const PORT =1337;

// app.listen(PORT,() =>{
//   console.log("App is running on port", PORT);
// })

//replit: https://replit.com/@thahsi/UrlShortener#index.js


const express = require('express');
const app = express();
const shortUrl = require('./routes/shortUrl');
const homeRoute = require('./routes/home')

//middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));


//routes
app.use('/urlapi', shortUrl)
app.use('/', homeRoute)

//connecting to the port
app.listen(process.env.PORT || 3000, () => {
  console.log("APP is running");
})