// In index file, will be handle all the routing middlewares whose path matches to index 
// first, we need to require express in this particular file
// once will have express, will extract router from express.Router();
// and we can now make differenbt middlewares
//  at the end , we need to export router from this file using "modules.export = router"

const express = require('express');

const router = express.Router();

router.get('/',(req,res)=> {
    res.render('index');
})

module.exports = router;