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

	 		res.status(200).json(blogs.map(blog => {

	 				return blog.apiRepr();

	 		}));

	 })
	.catch(err => {

      		console.error(err);
      		res.status(500).json({ error: 'something went terribly wrong' });

    });

});


router.get('/:id', (req, res) => {

	console.log('making a GET request by ID');
	const targetBlog = req.params.id;

	BlgPosts
	.findById(targetBlog)
	.then(blog => {

	 		res.status(200).json( blog.apiRepr() );

	 })
	.catch(err => {

      		console.error(err);
      		res.status(500).json({ error: 'something went terribly wrong' });

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

	 		res.status(201).json( blog.apiRepr() );

	 })
	 .catch(err => {

      		console.error(err);
      		res.status(500).json({ error: 'something went terribly wrong' });

    });


});

router.delete('/:id', (req, res) => {

	console.log('making a DELETE request');
	const targetBlogID = req.params.id;

	BlgPosts
	.findByIdAndRemove(targetBlogID)
	.then( () => {

		res.sendStatus(204);

	})
	.catch(err => {

      		console.error(err);
      		res.status(500).json({ error: 'something went terribly wrong' });

    });


});

//res.status(204).end();

router.put('/:id', (req, res) => {

	console.log('making a PUT request');
	
});
//res.status(200).end();

module.exports = router;