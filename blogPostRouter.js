'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {BlgPosts} = require('./models'); 

router.get('/', (req, res) => {

	console.log('making a GET request');

	BlgPosts
	.find()
	.then(blogs => {

	 		res.json(blogs.map(blog => {

	 				return blog.apiRepr();

	 		}));

	 });

});


router.get('/:id', (req, res) => {

	console.log('making a GET request by ID');
	const targetBlog = req.params.id;

	BlgPosts
	.findById(targetBlog)
	.then(blog => {

	 		res.json( blog.apiRepr() );

	 });
});


router.post('/', jsonParser, (req, res) => {

	console.log('making a POST request');
	const newBlog = {


			title: req.body.title,
      	    content: req.body.content,
     		author: req.body.author
	}

	BlgPosts
	.create(newBlog)
	.then(blog => {

	 		res.json( blog.apiRepr() );

	 });

});

router.delete('/:id', (req, res) => {

	console.log('making a DELETE request');
	const targetBlogID = req.params.id;

	BlgPosts
	.findByIdAndRemove(targetBlogID)
	.then( () => {

		res.sendStatus(204);

	});

});

//res.status(204).end();

router.put('/:id', (req, res) => {

	console.log('making a PUT request');
	
});
//res.status(200).end();

module.exports = router;