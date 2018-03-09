/*
Phase 1:
		1. import express
		2. create an app using express()
		3. make it listen, and console log it.
			* app.listen(PORT, () => {console.log()});


Phase 3:
		  (trying to make a get request)
	   --> 1. Need to import router so that the actual request is sent 
	   2. have the app use the endpoint and the modelRouterApp
	   3. install morgan, and import. 
	   4. add runServer() and closeServer()(proceed to phase 4, in test-blog.js)

*/
'use strict';

const express = require('express');
const app = express();
const blogRouterApp = require('./blogPostRouter');
const morgan = require('morgan');

app.use(morgan('common'));
app.use('/blog-posts-jr', blogRouterApp);

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`hi jr, your port is listening, this is the terminal`);
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer };

/*
app.listen(process.env.PORT || 8080, () => {
	console.log('hi jr, your port is listening, this is the terminal');
});*/
