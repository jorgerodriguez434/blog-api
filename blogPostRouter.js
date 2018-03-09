
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {BlgPosts} = require('./models'); //this means, that BlgPosts will get all the functions of the model, that is all I know,
										// has to be the same name as in from the model.js
BlgPosts.create('The Forgotten Road','Fiction','Richard Paul Evans');
BlgPosts.create('Baker\'s secret', 'Fiction','Stephen P. Kiernan');
BlgPosts.create('Clive Cussler','Fiction','Graham Brown');

router.get('/', (req, res) => {

	console.log('making a GET request -jr');
	res.json(BlgPosts.get());
	res.status(200).end();

});

router.post('/', jsonParser, (req, res) => {

	console.log('making a POST request -jr');
	const blog = BlgPosts.create(req.body.title, req.body.content, req.body.author);
	res.status(201).json(blog);

});

router.delete('/:id', (req, res) => {

	console.log('making a DELETE request -jr');
	const targetBlogID = req.params.id
	console.log(`deleting blog post: ${targetBlogID}`);
	BlgPosts.delete(targetBlog);
	res.status(204).end();

});

/*
router.put(console.log('updating blog'); */

module.exports = router;
