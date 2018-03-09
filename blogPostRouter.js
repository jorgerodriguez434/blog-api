/*
Phase 2:

Overbiew:
Build 4 endpoints
Export the routing app 
I would say that the router serves as a model app for the actual app
 the router is like a test app where you can test the endpoints and the export that test app into the real app

Todo List:
--> 1. Need to import express function 
--> 2. Need to create an app(router) using express() 
--> 3. Need to import BlogPosts model module 
--> 4. Need to build a GET endpoint 
		--> * need to have an endpoint say, '/' 
		--> * need to have (req, res) 
		--> * need a callback
		* make a GET request (proceed to phase 3, in server.js)
5. Need to build a POST endpoint 
6. Need to build a DELETE endpoint 
7. Need to build a UPDATE endpoint 

*/

const express = require('express');
const router = express.Router();


/*
coming from:
		module.exports = {BlogPosts: createBlogPostsModel()};
		this is being exported as:
								{key: function}
*/
const {BlgPosts} = require('./models'); //this means, that BlgPosts will get all the functions of the model, that is all I know,
										// has to be the same name as in from the model.js

//just create some database using models.js
BlgPosts.create('The Forgotten Road','Fiction','Richard Paul Evans');
BlgPosts.create('Baker\'s secret', 'Fiction','Stephen P. Kiernan');
BlgPosts.create('Clive Cussler','Fiction','Graham Brown');

router.get('/', (req, res) => {

	console.log('making a GET request -jr');
	res.json(BlgPosts.get());
	res.status(200);

});

/*
router.post(console.log('posting blog(s)');
router.delete(console.log('deleting blog');
router.put(console.log('updating blog'); */


module.exports = router;
