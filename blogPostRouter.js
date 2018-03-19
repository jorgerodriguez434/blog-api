'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {BlgPosts} = require('./models'); 

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

router.get('/', (req, res) => {

	console.log('making a GET request');
	const blogs = BlgPosts.find();
	console.log(blogs);


});

router.get('/:id', (req, res) => {

	console.log('making a GET request by ID');
	//BlgPosts.findById(req.params.id);

});

router.post('/', jsonParser, (req, res) => {

	console.log('making a POST request');
	const blog = BlgPosts.create({

			title: req.body.title,
      	    content: req.body.content,
     		author: req.body.author

	});

	res.json(blog);

});

router.delete('/:id', (req, res) => {

	console.log('making a DELETE request');
	//BlgPosts.findByIdAndRemove(req.params.id)

	res.status(204).end();

});

router.put('/:id', (req, res) => {

	console.log('making a PUT request');
	res.status(204).end();

});


module.exports = router;