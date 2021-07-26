// requires
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
// connect to mongodb database using mongoose
mongoose.connect("mongodb://localhost/bookstore",{ useNewUrlParser: true ,useUnifiedTopology: true},(err)=> {
    console.log(err? err:"Connected to database");
})

// instantiating express app
const app = express();

// middlewares
//setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , "views"));
// capture form data
app.use(express.urlencoded({extended: false}));
//setup static directory
app.use(express.static(path.join(__dirname,"public")));
 

// routing middlewares
// here below instead of handleing all the routing middleware in app.js , will create index.js file in the routes fdirectory to handle all the requersts coming on "/" path and second argument it accept as the relative path of the file, where the routing middleware of the particualr path present.
// whenver , the request meatches the path, it wil look for the particular file which is given inthe required in form of relative path
app.use('/', require('./routes/index'));
app.use('/books', require('./routes/books'));

// error handleing middleware
app.use((req,res,next)=> {
    res.send('Page not found');
});
app.use((err,req,res,next)=> {
    res.send(err);
})

// listen to set the port
app.listen(3000,()=>{
    console.log("listening on port 3k");
});