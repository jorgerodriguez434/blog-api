
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlgPosts} = require('./models'); 

BlgPosts.create('The Forgotten Road','Fiction','Richard Paul Evans');
BlgPosts.create('Baker\'s secret', 'Fiction','Stephen P. Kiernan');
BlgPosts.create('Clive Cussler','Fiction','Graham Brown');

router.get('/', (req, res) => {

	console.log('making a GET request -jr');
	res.json(BlgPosts.get());
	res.status(200).json();

});

router.post('/', jsonParser, (req, res) => {

	console.log('making a POST request -jr');
	const blog = BlgPosts.create(req.body.title, req.body.content, req.body.author);
	res.status(201).json(blog); // `blog as argument`

});

router.delete('/:id', (req, res) => {

	console.log('making a DELETE request -jr');
	const targetBlogID = req.params.id
	console.log(`deleting blog post: ${targetBlogID}`);
	BlgPosts.delete(targetBlogID);

	res.status(204).end();

});

router.put('/:id', (req, res) => {

	res.status(204).end();

});


module.exports = router;
