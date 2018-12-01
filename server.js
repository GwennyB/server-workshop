'use strict';

// set up dependencies
const express = require('express'); // imports 'express' into this app
const app = express(); // because express documentation says so (always use 'app')
const PORT = process.env.PORT || 3000;

// allows us to serve static files (like html)
app.use(express.static('./public'));

// test server response
app.get('/test', function(req,res) { // request from localhost:3000/test
  res.status(200).send('msg from the server'); // server response 'got it' (ie - 'status: 200' - use standard status codes)
});

// home route
app.get('/home', function(req,res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

// json route
app.get('/json', function(req,res) { // request from localhost:3000/test
  let course = {
    date: Date.now,
    title: 'Code 301',
    instructor: 'Brian',
    studentCount: 20,
  };
  console.log('i hit json route');
  res.status(200).json(course);
});

// establish public directory

// open a port
app.listen(PORT, function() { // 'app' calls 'express'; .listen opens port in arg; port from heroku
  console.log('listening on port ', PORT);
});

