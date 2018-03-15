
'use strict';

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //

const {BlgPosts} = require('./models'); 

/*
BlgPosts.create('The Forgotten Road','Fiction','Richard Paul Evans');
BlgPosts.create('Baker\'s secret', 'Fiction','Stephen P. Kiernan');
BlgPosts.create('Clive Cussler','Fiction','Graham Brown');

*/

router.get('/', (req, res) => {

	console.log('making a GET request -jr');
	BlgPosts.find()

});

router.get('/:id', (req, res) => {

	console.log('making a GET request by ID -jr');
	//BlgPosts.findById(req.params.id);

});

router.post('/', jsonParser, (req, res) => {

	console.log('making a POST request -jr');
	//BlgPosts.create({title: req.body.title, content: req.body.content, author: req.body.author });

});

router.delete('/:id', (req, res) => {

	console.log('making a DELETE request -jr');
	//BlgPosts.findByIdAndRemove(req.params.id)

	res.status(204).end();

});

router.put('/:id', (req, res) => {

	console.log('making a PUT request -jr');
	res.status(204).end();

});


module.exports = router;
