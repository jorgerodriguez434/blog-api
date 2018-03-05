const express = require('express');
const bodyParser = require('body-parser');
const app = express.Router();


const {BlogPosts} = require('./models');
const jsonParser = bodyParser.json();

BlogPosts.create('The Forgotten Road','Fiction','Richard Paul Evans');
BlogPosts.create('Baker\'s secret', 'Fiction','Stephen P. Kiernan');
BlogPosts.create('Clive Cussler','Fiction','Graham Brown');


app.get('/', (req, res) => {

	console.log('getting blog post(s)');
	const currentBlogs = BlogPosts.get()
	res.json(currentBlogs);

});

app.post('/', jsonParser, (req, res) => {

	console.log('posting blog post');
	const requiredFields = ['title', 'content', 'author'];
	requiredFields.map(field => {

			if(!(field in req.body)){

				const message = `Missing: ${field} in request body`;
      			console.error(message);
      			return res.status(400).send(message);

			}
	const newBlog = BlogPosts.create(req.body.title, req.body.content, req.body.author);
	res.status(201).json(newBlog);

	});

});

app.delete('/:id', jsonParser, (req, res) => {

	console.log(`deleting blog post: ${req.params.id}`);
	const targetBlog = req.params.id
	BlogPosts.delete(targetBlog);
	res.status(204).end()


});

app.put('/:id', jsonParser, (req, res) => {

	console.log(`updating blog: ${req.params.id}`);
	const requiredFields = ['title', 'content', 'author'];
	requiredFields.map(field => {

			if(!(field in req.body)){

				const message = `Missing: ${field} in request body`;
      			console.error(message);
      			return res.status(400).send(message);

			}

	});

	BlogPosts.update({

				id: req.params.id,
				title: req.body.title,
				content: req.body.content,
		
	});
});

module.exports = app;

